const Part = (props) => {
    console.log('Hello');
    return(
        <>
            <p>
                {props.part} {props.ex}
            </p>
        </>
    );
}

export default Part;