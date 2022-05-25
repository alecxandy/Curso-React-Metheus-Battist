import Item from "./Item";
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari"></Item>
                <Item marca="Laborguine"></Item>
                <Item marca="Chevrolet"></Item>
            </ul>
        </>
    );
}
export default List;
