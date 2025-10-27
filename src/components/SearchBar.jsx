import { useState } from 'react'


export default function SearchBar({ onSearch }) {
const [q, setQ] = useState('')


const submit = (e) => {
e.preventDefault()
onSearch(q)
}


return (
<form className="search" onSubmit={submit} role="search">
<input
placeholder="Tìm mẹo: Windows, iPhone, Android…"
value={q}
onChange={(e) => setQ(e.target.value)}
aria-label="Tìm kiếm bài viết"
/>
<button type="submit">Tìm</button>
</form>
)
}