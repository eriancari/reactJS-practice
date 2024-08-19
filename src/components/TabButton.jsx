export default function TabButton({children, isSelected, ...props}) {
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button> 
            {/* "children" refers to the contents in between the component (see App.jsx) */}
        </li>
    )
}