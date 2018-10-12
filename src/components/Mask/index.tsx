// import cssAnimate, { isCssAnimationSupported } from 'css-animation';
import cx from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Icon from '../Icon';
import './style/index.less';

// var cssAnimate = require('css-animation');

// const isCssAnimationSupported = cssAnimate.isCssAnimationSupported;

const noop = (e:any) => e;

interface IMask {
    visible:boolean;
    getContainer?: (node:any)=>any;
    onClose: (e:React.SyntheticEvent)=>void;
    prefixCls: string;

    className: string;
    closable: boolean;
    maskClosable:boolean;
}

class Mask extends React.Component<IMask> {
    public static defaultProps = {
        prefixCls: 'basic-mask',
        maskClosable: true
    };

    private container:HTMLDivElement;
    // private node: HTMLDivElement;
    private node = React.createRef<HTMLDivElement>();



  public componentDidMount() {
    const { visible, getContainer } = this.props;
    this.container = document.createElement('div');
    if (getContainer) {
      const mountNode = getContainer(ReactDOM.findDOMNode(this));
      mountNode.appendChild(this.container);
    } else {
      document.body.appendChild(this.container);
    }
    this.toggle(visible);
  }

  public componentDidUpdate(prevProps:IMask) {
    const { visible } = this.props;
    this.toggle(visible);
  }

  public componentWillUnmount() {
      if (this.container) {
          // @ts-ignore
          this.container.parentNode.removeChild(this.container)
      }
  }

  public toggle = (visible:boolean) => {
    const node = this.node.current;
    if (!node) {
        return;
    }
    if (visible) {
        node.style.display = 'block';
    }

    /*if (isCssAnimationSupported) {
      cssAnimate(node, `fade${visible ? 'In' : 'Out'}`, () => {
        node.style.display = visible ? 'block' : 'none';
      });
    } else {
      node.style.display = visible ? 'block' : 'none';
    }*/
      node.style.display = visible ? 'block' : 'none';
  };

  public onClick = (e:any) => {
    const { onClose, prefixCls } = this.props;

    if (
      (e.target.classList.contains(prefixCls) ||
        e.target.classList.contains(prefixCls + '-close')) &&
      onClose
    ) {
      onClose(e);
    }
  };

  public render() {
    const {
      children,
      className,
      prefixCls,
      closable,
      maskClosable
    } = this.props;

    if (this.container) {
      return ReactDOM.createPortal(
        <div
          ref={this.node}
          className={cx(prefixCls, 'animated', 'animated-short', className)}
          onClick={maskClosable ? this.onClick : noop}
        >
          {closable ? (
            <Icon
              className={`${prefixCls}-close`}
              type="close"
              antd={true}
              onClick={this.onClick}
            />
          ) : null}
          {children}
        </div>,
        this.container
      );
    }

    return <div/>;
  }
}

export default Mask;
