// Interfaces
import { DBDataUsers } from "../../../interfaces"

interface Props {
    data: DBDataUsers[]
}

const Client = ({data}: Props) => {
    return (
        <div>
            <h1>Client</h1>
        </div>
    )
}

export {Client}
