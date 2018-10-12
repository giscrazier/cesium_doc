/**
 * Created by 姚应龙 on 2018/9/3
 */
export function width(el:HTMLElement) {
    // @ts-ignore
    const styles = el.ownerDocument.defaultView.getComputedStyle(el,null);
    const w = Number.parseFloat((styles.width||'0').indexOf('px') !== -1? styles.width||'0' : '0');

    const boxSizing = styles.boxSizing || 'content-box';
    if (boxSizing === 'border-box') {
        return w;
    }

    const borderLeftWidth = Number.parseFloat(styles.borderLeftWidth || '0');
    const borderRightWidth = Number.parseFloat(styles.borderRightWidth || '0');
    const paddingLeft = Number.parseFloat(styles.paddingLeft || '0');
    const paddingRight = Number.parseFloat(styles.paddingRight || '0');

    return w - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
}