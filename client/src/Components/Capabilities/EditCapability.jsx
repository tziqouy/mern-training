import React from 'react'

const EditCapability = () => {
    const {id} = useParams()
    const [capability, setCapability] = useState({
        name: ""
      });
      const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/auth/capabilities/'+id)
        .then(result => {
            if(result.data.Status) {
                setCapability(result.data.capability)
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }, [id])
        e.preventDefault()
        axios.put('http://localhost:3000/auth/capabilities/'+id, capability)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/capability')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div className="p-3 rounded w-50 border">
            <h3 className="text-center">Edit Capability</h3>
            <form className="row g-1" onSubmit={handleSubmit}>
              <div className="col-12">
                <label for="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  id="inputName"
                  placeholder="Enter Name"
                  value={capability.name}
                  onChange={(e) =>
                    setCapability({ ...capability, name: e.target.value })
                  }
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">
                  Edit Capability
                </button>
              </div>
            </form>
          </div>
        </div>
      )
}

export default EditCapability
