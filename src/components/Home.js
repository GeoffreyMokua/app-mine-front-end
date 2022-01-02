// import '../styles/home.css'
import Header from '../layout/Header.js'
import SideBar from '../layout/SideBar.js'
import TaskOption from './TaskOption.js'
import TaskContainer from './TaskContainer.js'
import TaskCard from './TaskCard.js'
import Root from '../layout/Root.js'
import Container from '../layout/Container.js'

export default function Home() {


    const d1 = {title: "new title number one",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima facere ab animi mollitia non repellat consequatur, quibusdam fugit. Quod aut mollitia eum soluta deserunt, nesciunt repellendus velit quia doloribus. "}

    return (
        <>
            <Header />
            <Root>
                <SideBar />
                <Container>
                    <TaskOption />
                    <TaskContainer>
                        <TaskCard todo={d1}/>
                    </TaskContainer>
                </Container>
            </Root>
            
        </>
    )
}
