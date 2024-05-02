{
    'name': 'Inntegra dashboard extension',
    'version': '1.0',
    'author': 'Demian Avila - davila@inntegra.tech',
    'website': 'inntegra.tech',
    'summary': 'Module to extend the dashboard module with custom metrics',
    'depends': [
        'base', 
        'spreadsheet_dashboard'
    ],
    'data': [
        'views/invalidate_menu.xml',
        'views/replace_menu.xml'
    ],
    'assets': {
        'web.assets_backend': [
            'inntegra_dashboard/static/src/js/components/**/*',
            'inntegra_dashboard/static/src/js/load_custom_dashboard.js',
            'inntegra_dashboard/static/src/xml/dashboard_template.xml'
        ]
    },
    'license': 'OPL-1',
    'installable': True,
    'application': True,
}


