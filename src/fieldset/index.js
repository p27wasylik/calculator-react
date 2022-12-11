import './style.css';

const Fieldset = ({legend, content1,}) => (
    <fieldset className="section__fieldset">
        {legend}
        {content1}
    </fieldset>
);

export default Fieldset;