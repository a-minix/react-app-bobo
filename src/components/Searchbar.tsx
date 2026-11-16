
type SearchbarProps = {
  handleSearch: (input: string) => void
}

const Searchbar = ({handleSearch}: SearchbarProps) => {
  return (
    <div>
      <input type="text" placeholder="🕵️‍♀️" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  )
}

export default Searchbar