// {..props} means fetching the remaining props added in a customed component 
export default function Section({title, children, ...props}) {
    return (<section {...props}>
        <h2>{title}</h2>
        {children}
    </section>)
}