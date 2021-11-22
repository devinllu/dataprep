"""
    This module implements the plot_missing(df, x, y) function's
    visualization part.
"""
from typing import Any, Dict

import holoviews as hv
import numpy as np
import scipy.stats
from bokeh.models import HoverTool
from bokeh.models.annotations import Title
from bokeh.models.widgets import Panel, Tabs
from bokeh.plotting import Figure

from ...utils import DataType, get_type
from ..common import Intermediate


def _vis_nonzero_count(  # pylint: disable=too-many-locals
        intermediate: Intermediate,
        params: Dict[str, Any]
) -> Figure:
    """
    :param intermediate: An object to encapsulate the
    intermediate results
    :return: A figure object

    This function is designed to draw a heatmap,
    which is able to show the missing value's location and rate
    """
    hv.extension('bokeh', logo=False)
    distribution = intermediate.result['distribution']
    count = intermediate.result['count']
    row, col = distribution.shape
    columns_name = list(intermediate.raw_data['df'].columns.values)
    data_d = [(columns_name[i] + '(%0.2f' % (count[i] * 100) + '%)', j, distribution[i, j])
              for i in range(row) for j in range(col)]
    tooltips = [
        ('z', '@z'),
    ]
    hover = HoverTool(tooltips=tooltips)
    heatmap = hv.HeatMap(data_d).redim.range(z=(-1, 1))
    heatmap.opts(
        tools=[hover],
        colorbar=False,
        height=params['height'],
        width=params['width'],
        title="Position of Missing Value",
        show_grid=False
    )
    fig = hv.render(heatmap, backend='bokeh')
    fig.toolbar_location = None
    fig.toolbar.active_drag = None
    fig.xaxis.axis_label = 'Column Name'
    fig.yaxis.axis_label = 'Position'
    fig.yaxis.major_tick_line_color = None
    fig.yaxis.minor_tick_line_color = None
    fig.yaxis.major_label_text_font_size = '0pt'
    return fig


def _vis_missing_impact(  # pylint: disable=too-many-locals
        intermediate: Intermediate,
        params: Dict[str, Any]
) -> Tabs:
    """
    :param intermediate: An object to encapsulate the
    intermediate results
    :return: A figure object

    This function is designed to show histogram or bars of
    original data and updated data
    """
    pd_data_frame = intermediate.raw_data['df']
    num_bins = intermediate.raw_data['num_bins']
    df_data_drop = intermediate.result['df_data_drop']
    columns_name = intermediate.result['columns_name']
    hv.extension('bokeh', logo=False)
    tab_list = []
    for name in columns_name:
        if get_type(pd_data_frame[name]) == DataType.TYPE_NUM:
            tooltips = [
                ('Frequency', '@Frequency'),
            ]
            hover = HoverTool(tooltips=tooltips)
            hist_origin = hv.Histogram(
                np.histogram(pd_data_frame[name].values, num_bins),
                label='Original Data'
            ).opts(alpha=params['alpha'], tools=[hover])
            hist_drop = hv.Histogram(
                np.histogram(df_data_drop[name].values, num_bins),
                label='Updated Data'
            ).opts(alpha=params['alpha'], tools=[hover])
            fig = hv.render(
                (hist_origin * hist_drop).opts(
                    height=params['height'],
                    width=params['width'],
                    legend_position=params['legend_position']
                ),
                backend='bokeh'
            )
            fig.xaxis.axis_label = 'Column Name'
            fig.yaxis.axis_label = 'Frequency'
            title = Title()
            title.text = 'Frequency of Value'
            fig.title = title
            tab = Panel(child=fig, title=name)
            tab_list.append(tab)
        elif get_type(pd_data_frame[name]) == DataType.TYPE_CAT:
            tooltips = [
                ('Frequency', '@c'),
            ]
            hover = HoverTool(tooltips=tooltips)
            bars_origin = hv.Bars(
                pd_data_frame[name].value_counts(),
                label='Original Data'
            ).opts(alpha=params['alpha'], tools=[hover])
            bars_drop = hv.Bars(
                df_data_drop[name].value_counts(),
                label='Updated Data'
            ).opts(alpha=params['alpha'], tools=[hover])
            fig = hv.render(
                (bars_origin * bars_drop).opts(
                    height=params['height'],
                    width=params['width'],
                    legend_position=params['legend_position']
                ),
                backend='bokeh'
            )
            fig.xaxis.axis_label = 'Column Name'
            fig.yaxis.axis_label = 'Frequency'
            title = Title()
            title.text = 'Frequency of Value'
            fig.title = title
            tab = Panel(child=fig, title=name)
            tab_list.append(tab)
        else:
            raise ValueError("the column's type is error")
    tabs = Tabs(tabs=tab_list)
    return tabs


def _vis_missing_impact_y(  # pylint: disable=too-many-locals
        intermediate: Intermediate,
        params: Dict[str, Any]
) -> Tabs:
    """
    :param intermediate: An object to encapsulate the
    intermediate results
    :return: A figure object

    This function is designed to show histogram, bars, pdf or cdf of
    original data and updated data.
    Compared with _vis_missing_impact function, the data is y_name column
    """
    pd_data_frame = intermediate.raw_data['df']
    y_name = intermediate.raw_data['y_name']
    num_bins = intermediate.raw_data['num_bins']
    df_data_drop = intermediate.result['df_data_drop']
    origin_data = pd_data_frame[y_name].values
    drop_data = df_data_drop[y_name].values
    hv.extension('bokeh', logo=False)
    if get_type(pd_data_frame[y_name]) == DataType.TYPE_NUM:
        hist_data_origin = np.histogram(
            origin_data,
            bins=num_bins
        )
        hist_data_drop = np.histogram(
            drop_data,
            bins=num_bins
        )
        hist_dist_origin = scipy.stats.rv_histogram(hist_data_origin)
        hist_dist_drop = scipy.stats.rv_histogram(hist_data_drop)
        sample_x = np.linspace(
            np.min(origin_data),
            np.max(origin_data),
            100
        )
        pdf_origin = hv.Curve(
            (sample_x, hist_dist_origin.pdf(sample_x)),
            label='Original PDF'
        )
        cdf_origin = hv.Curve(
            (sample_x, hist_dist_origin.cdf(sample_x)),
            label='Original CDF'
        )
        pdf_drop = hv.Curve(
            (sample_x, hist_dist_drop.pdf(sample_x)),
            label='Updated PDF'
        )
        cdf_drop = hv.Curve(
            (sample_x, hist_dist_drop.cdf(sample_x)),
            label='Updated CDF'
        )
        tooltips = [
            ('Frequency', '@Frequency'),
        ]
        hover = HoverTool(tooltips=tooltips)
        hist_origin = hv.Histogram(
            hist_data_origin,
            label='Original Data'
        ).opts(
            alpha=params['alpha'],
            tools=[hover]
        )
        hist_drop = hv.Histogram(
            hist_data_drop,
            label='Updated Data'
        ).opts(
            alpha=params['alpha'],
            tools=[hover]
        )
        fig_hist = hv.render(
            (hist_origin * hist_drop).opts(
                height=params['height'],
                width=params['width'],
                legend_position=params['legend_position']
            ),
            backend='bokeh'
        )
        fig_pdf = hv.render(
            (pdf_origin * pdf_drop).opts(
                height=params['height'],
                width=params['width'],
                legend_position=params['legend_position']
            ),
            backend='bokeh'
        )
        fig_cdf = hv.render(
            (cdf_origin * cdf_drop).opts(
                height=params['height'],
                width=params['width'],
                legend_position=params['legend_position']
            ),
            backend='bokeh'
        )
        group_origin = ['Original' for _, _ in enumerate(origin_data)]
        group_drop = ['Updated' for _, _ in enumerate(drop_data)]
        group_origin.extend(group_drop)
        tooltips = [
            ('Group', '@Group'),
            ('Value', '@Value')
        ]
        hover = HoverTool(tooltips=tooltips)
        box_mixed = hv.BoxWhisker(
            (group_origin, np.append(origin_data, drop_data)),
            ['Group'], 'Value'
        ).opts(
            tools=[hover],
            height=params['height'],
            width=params['width']
        )
        fig_box = hv.render(
            box_mixed,
            backend='bokeh'
        )
        tab_hist = Panel(child=fig_hist, title='histogram')
        tab_box = Panel(child=fig_box, title='box')
        tab_pdf = Panel(child=fig_pdf, title='pdf')
        tab_cdf = Panel(child=fig_cdf, title='cdf')
        tabs = Tabs(tabs=[tab_hist, tab_box, tab_pdf, tab_cdf])
    elif get_type(pd_data_frame[y_name]) == DataType.TYPE_CAT:
        tooltips = [
            ('Frequency', '@c'),
        ]
        hover = HoverTool(tooltips=tooltips)
        bars_origin = hv.Bars(
            pd_data_frame[y_name].value_counts(),
            label='Original Data'
        ).opts(
            alpha=params['alpha'],
            tools=[hover]
        )
        bars_drop = hv.Bars(
            df_data_drop[y_name].value_counts(),
            label='Updated Data'
        ).opts(
            alpha=params['alpha'],
            tools=[hover]
        )
        fig_bars = hv.render(
            (bars_origin * bars_drop).opts(
                height=params['height'],
                width=params['width'],
                legend_position=params['legend_position']
            ),
            backend='bokeh'
        )
        tab_bars = Panel(child=fig_bars, title='bars')
        tabs = Tabs(tabs=[tab_bars])
    else:
        raise ValueError("the column's type is error")
    return tabs
