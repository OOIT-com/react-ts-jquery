import $ from 'jquery';

const dummy = () => {
};
type ButtonProps = { text: string; title?: string; onClick: () => void };

export function button({text, title, onClick}: ButtonProps) {
    return $('<button>', {text, title}).on('click', onClick);
}

export function link({text, onClick, title}: ButtonProps) {
    return $('<a>', {href: '#', text, title}).on('click', onClick);
}

type _JQuery = JQuery.htmlString | JQuery.TypeOrArray<JQuery.Node | JQuery<JQuery.Node>>;

type DivProps = {
    text?: string;
    title?: string;
    onClick?: () => void;
    children?: _JQuery | _JQuery[];
};

export function div({text, title, onClick = dummy, children = ''}: DivProps) {
    const _div = $('<div>', {text, title}).on('click', onClick);
    if (Array.isArray(children)) {
        children.forEach((e) => _div.append(e));
    } else {
        _div.append(children);
    }
    return _div;
}


export const today = () => $('<div>').css('font-size', '80%').css('margin', '0.6em 0').css('padding', '0.4em').css('border', 'solid 1px gray').text(`Today ${new Date()}`)
