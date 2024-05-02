from odoo import models, fields

class IntegraDashboard(models.Model):
    _name = "integra.dashboard"

    main_div = fields.Boolean(
        string = "Main div"
    )
