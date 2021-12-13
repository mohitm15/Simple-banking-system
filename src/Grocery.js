import { Button, Row } from "react-bootstrap"
import { useHistory } from "react-router"
import { useUser } from "../auth/useUser"
import { NavbarComponent } from "../NavBar"
import useCounts from "../util/useCounts"

export const Grocery = () => {

    const user = useUser()
    const { username } = user.user
    const history = useHistory()

    const tenantId = 1004
    const {itemsCnt, stocksCnt, pinsCnt} = useCounts(tenantId);

    return (
        <>

            <NavbarComponent tenantId={tenantId}/>

            <div id='page-body'>

                <h1>Welcome {username} to Groceries!</h1>

                <hr />

                <div className='carouselSpace'>

                    <Row sm={6} className="justify-content-md-center" style={{ height: '70px' }} >
                        <Button className='fetchButton my-2 mx-1' onClick={() => history.push({ pathname: '/get-all-items', state: { tenantId: tenantId } })}>Items <div>{'(' + itemsCnt + ')'}</div></Button>
                        <Button className='fetchButton my-2 mx-1' onClick={() => history.push({ pathname: '/get-all-stockpoints', state: { tenantId: tenantId } })}>Stockpoints <div>{'(' + stocksCnt + ')'}</div></Button>
                        <Button className='fetchButton my-2 mx-1' onClick={() => history.push({ pathname: '/get-all-pinfences', state: { tenantId: tenantId } })}>Pin Fences <div>{'(' + pinsCnt + ')'}</div></Button>
                        <Button className='fetchButton my-2 mx-1' onClick={() => history.push({ pathname: '/inventory', state: { tenantId: tenantId } })}>Inventory</Button>
                    </Row>

                </div>

            </div>
        </>
    )
}