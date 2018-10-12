import AntdIcon, {IconProps} from 'antd/lib/icon';
import classnames from 'classnames';
import * as React from 'react';


export interface IIcon extends IconProps{
    children?: React.ReactNode;
    font: string;
    antd?: boolean;
}

/**
 * 字体图标，兼容antd的图标
 * 目前有2套图标：ad,city。默认为ad
 */
class Icon extends React.Component<IIcon> {

  public static defaultProps = {
    prefixCls: 'antui-icon',
    className: '',
    font: 'ad'
  };

  public render() {
    const {
      prefixCls,
      type,
      className,
      children,
      font,
      antd,
      spin,
      ...props
    } = this.props;
    const cn = classnames(
      prefixCls,
      {
        [font]: font,
        [font + '-' + type]: font && type,
        spin
      },
      className,
        'v_middle'
    );

    // @ts-ignore
      if (/^&#x.+;$/.test(type)) {
      // @ts-ignore
          return <i className={cn} {...props} dangerouslySetInnerHTML = {{ __html: type }} />
    }
    return antd ? (
      <AntdIcon type={type} className={className} spin={spin} {...props}>
        {children}
      </AntdIcon>
    ) : (
      <i className={cn} {...props}>
        {children}
      </i>
    );
  }
}

export default Icon;
