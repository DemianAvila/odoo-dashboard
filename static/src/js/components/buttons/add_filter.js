/** @odoo-module */
const { Component, xml } = owl;

export class AddFilter extends Component {
    static template = xml`
    <div class="col-sm-12 text-center">
        <button type="button" class="btn btn-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
            </svg>
        </button>
    </div>`;
    
}

