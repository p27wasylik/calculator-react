import './style.css'

const Container = (props) => (
<form className="container">
    {props.children}
</form>
);

export default Container;