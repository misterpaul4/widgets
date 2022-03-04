const AccordionCard = ({config}) => {
  const { title, content } = config.item;
  const {handleTitleClick, index, active} = config;

  const onSubmitTitleClick = () => {
    handleTitleClick(index);
  }

  const activeClass = active ? "active" : "";

  return (
    <>
      <div className={`title unselectable ${activeClass}`} onClick={onSubmitTitleClick}>
        <i className="dropdown icon"></i>
        {title}
      </div>
      <div className={`content ${activeClass}`}>
        <p>{content}</p>
      </div>
    </>
  );
}

export default AccordionCard;
