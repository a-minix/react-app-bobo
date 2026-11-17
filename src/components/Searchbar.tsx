
type SearchbarProps = {
  handleSearch: (input: string) => void
}

const Searchbar = ({ handleSearch }: SearchbarProps) => {
  return (
    <input type="text" placeholder="🕵️‍♀️" onChange={(e) => handleSearch(e.target.value)} />
  )
}

export default Searchbar