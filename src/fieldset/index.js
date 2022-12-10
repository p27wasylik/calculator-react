import './style.css';

const Fieldset = ({legend, content1, content2}) => (
    <fieldset className="section__fieldset">
        {legend}
        {content1}
        {content2}
    </fieldset>
);

export default Fieldset;