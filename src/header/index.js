import './style.css';

const Header = ({titlePartOne, titleEmoji, titlePartTwo, extended }) => (
    <header className="header">

        <h1
            className="header__title"
        >
            {titlePartOne}
            <span
                className="header__span"
            >
                {titleEmoji}
            </span>
            {titlePartTwo}
        </h1>
        <p
            className="header__subTitle"
        >
            {extended}
        </p>
    </header>
);

export default Header;