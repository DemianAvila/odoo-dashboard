/** @odoo-module */
const { Component, useState, xml } = owl;

export class SelectFilter extends Component {
    static template = xml`
        <div class="col">
            <select class="form-select">
                <t t-foreach="this.filters" t-as="filter" t-key="filter.tag">
                    <option t-attf-value="{{ filter.value }}">
                        <t t-out="filter.tag"/>
                    </option>
                </t>
            </select>
        </div>`;
    
    setup(){
        this.filters = useState([
            {
                tag: "Fecha",
                value: "date"
            },
            {
                tag: "Rubro",
                value: "tag"
            },
            {
                tag: "Entidad",
                value: "entity"
            },
            {
                tag: "Departamento",
                value: "area"
            },
            {
                tag: "Proyecto",
                value: "project"
            },
            {
                tag: "Categoría",
                value: "category"
            },

        ]);
    }
}


