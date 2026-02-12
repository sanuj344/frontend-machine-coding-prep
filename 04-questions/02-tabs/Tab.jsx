function Tab({ label,isActive, onClick}){

return (
<button
className={isActive ? "tab active " : "tab"}
onClick={onClick}
>
{label}
</button>

);

}

export default Tab;