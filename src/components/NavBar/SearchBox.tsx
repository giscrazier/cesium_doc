import { Radio } from 'antd';
import * as React from 'react';
import Icon from '../Icon';
import Mask from '../Mask';

const RadioGroup = Radio.Group;

interface ISearchBox {
    visible: boolean
    onClose:()=>void
}

/**
 * 全屏搜索
 */
class SearchBox extends React.Component<ISearchBox> {
    public inputRef = React.createRef<HTMLInputElement>();
    public render() {
        const { visible, onClose } = this.props;
        return (
          <Mask visible={visible} onClose={onClose} className="search-box" closable={true}>
            <div className="search-box-input">
              <input ref={this.inputRef} type="text" placeholder="搜索..." />
              <a className="search-box-btn"><Icon type="search" antd={true} /></a>
            </div>
            <div className="search-box-content">
              <RadioGroup name="radiogroup" defaultValue={1}>
                <Radio value={1}>用户</Radio>
                <Radio value={2}>部门</Radio>
                <Radio value={3}>文章</Radio>
                <Radio value={4}>所有</Radio>
              </RadioGroup>
            </div>
          </Mask>
        );
  }
}

export default SearchBox;