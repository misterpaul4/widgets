import React from 'react';
import AccordionCard from './AccordionCard';

class Accordion extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
  }

  state = {
    activeIndex: null,
  }

  handleTitleClick = index => {
    const currentIndex = (index === this.state.activeIndex) ? null : index;

    this.setState({
      activeIndex: currentIndex
    })
  }


  render() {
    const items = this.props.items;
    const renderItems = items.map((item, index) => (
      <React.Fragment key={item.title}>
        <AccordionCard config={{
          item: item,
          handleTitleClick: this.handleTitleClick,
          index: index,
          active: this.state.activeIndex === index
        }} />
      </React.Fragment>
    ));

    return(
      <div className='ui styled accordion'>
        {renderItems}
      </div>
    );
  }
}

export default Accordion;
