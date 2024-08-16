export default function TabButton({children, onSelect, isSelected}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> 
            {/* "children" refers to the contents in between the component (see App.jsx) */}
        </li>
    )
}