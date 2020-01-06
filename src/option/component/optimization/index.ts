import { createSwitchInfoDom} from "../../common/switchInfo";
import "./index.scss";
import { IBaseHTMLPages } from "../types";
import { Config } from "../../../core/config"
import * as i18n from '../../../core/i18n'

export default class OptimizationPages implements IBaseHTMLPages {
    private mainDOM = document.createElement("div")
    static ID: string = "optimizationPages";

    constructor() {
        this.mainDOM.id = OptimizationPages.ID
    }

    private renderSwitchInfoComponent(config: Config): HTMLElement[] {
        const createIcon = (i: string) => `image/icon/option/optimization/${i}.svg`;
        const list = [
            {
                title: i18n.get('optionDNSSpeedTitle'),
                key: "dnsSpeed",
                content: i18n.get('optionDNSSpeedContent'),
                icon: createIcon("icons-dns"),
                on: config.dnsSpeed,
            },
            {
                title: i18n.get('optionWebPrereadingTitle'),
                key: "webPrereading",
                content: i18n.get('optionWebPrereadingContent'),
                icon: createIcon("icons-in_progress"),
                on: config.webPrereading,
            },
            {
                title: i18n.get('optionMemoryOptimizeTitle'),
                key: "memoryOptimize",
                content: i18n.get('optionMemoryOptimizeContent'),
                icon: createIcon("icons-smartphone_ram"),
                on: config.memoryOptimize,
            }
        ];
        return list.map(e => createSwitchInfoDom(e).divElement)
    }

    public render(config: Config): HTMLElement {
        this.mainDOM.innerHTML = `
            <div class="title">${i18n.get('optionOptimizationTitle')}</div>
            <div class="description">
                <p class="content">${i18n.get('optionOptimizationContent')}</p>
                <span class="detaile">${i18n.get('optionOptimizationDetail')}</span>
            </div>
            <div class="switch-info-container">
                <div />
            </div>
        `;
        this.mainDOM.querySelector('.switch-info-container').children[0].replaceWith(...this.renderSwitchInfoComponent(config))
        return this.mainDOM;
    }
}
