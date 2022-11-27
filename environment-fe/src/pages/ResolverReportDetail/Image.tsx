interface Props {
    src: string,
}
function Image(props: Props) {
    return (
        <img src={props.src} alt="" width="250"/>
    );
}

export default Image;