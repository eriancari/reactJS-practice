export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button> 
            {/* "children" refers to the contents in between the component (see App.jsx) */}
        </li>
    )
}