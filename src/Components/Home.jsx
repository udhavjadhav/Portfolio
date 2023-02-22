import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

const Container = styled.div`
     display: grid;
     grid-template-columns: 70% 30%;
`
const Container1 = styled.div`
    display: flex;
    flex-wrap: wrap; 
    line-height: 2.0;
    padding: 50px;
    /* border: 1px solid #fff; */
    margin-top: 100px;
    color: #fff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const Container2 = styled.div`
   display: flex;
   justify-content: end;
   margin-top: 40px;
   padding: 50px;

   &.img{
    height:600px;
    width:450px;
    z-index: -1;
   }
`
const Home = () => {
    return (
        <>
            <Navbar />
            <Container className='main'>
                <Container1 className='info'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam itaque a earum nihil excepturi quo corporis ipsa veniam odio! Vitae autem nostrum optio ipsa enim quibusdam ipsum deserunt. Molestias, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto voluptatem quis asperiores quas ipsum veniam nulla possimus, porro placeat quae quidem magni beatae laudantium corporis et illum quo doloremque suscipit voluptates, dolorem vel expedita molestias? A fugiat itaque molestiae nisi id animi impedit dignissimos quaerat vitae rerum ducimus illo, inventore ut dolores quam, atque ad excepturi facilis, sequi vel odio labore! Nihil obcaecati vero reiciendis illum maiores labore. Qui itaque numquam ducimus fugit ad recusandae possimus cupiditate facere? Sequi quam harum doloremque assumenda itaque quisquam amet nulla mollitia excepturi ad obcaecati doloribus qui quae, quasi delectus architecto nesciunt placeat laborum, possimus consequatur? Tempore ducimus minima eaque eius, ipsum nesciunt dolorem enim officia. Corporis adipisci repudiandae, laboriosam necessitatibus enim id, libero dolorum aperiam aliquam, itaque molestiae harum? Dolore quo quidem quisquam eos perferendis molestias dolorum doloremque! Quam iusto, quibusdam dolores mollitia ipsa beatae corporis, eos, temporibus quas iure sequi soluta. Perferendis velit repellendus doloremque sunt molestias quo rerum beatae! Dolorem aperiam in porro excepturi exercitationem voluptatum neque a unde dolore distinctio libero nemo quod voluptates, quis tempora nisi debitis fugit quo accusantium amet quasi. Aperiam hic, quisquam modi iusto dolores maxime ad ducimus, velit nulla natus deserunt beatae! Accusamus neque atque velit eaque laudantium dolore sed corrupti? Ducimus ad veritatis aliquam, similique accusantium maxime. Molestias voluptates, numquam beatae quos ipsa porro exercitationem, reprehenderit recusandae dolor explicabo libero commodi suscipit earum fuga vitae! Sed, qui quo, labore amet dolore sunt laborum inventore autem exercitationem tempore aliquam corporis a odit doloremque nam magnam veritatis quasi commodi repudiandae temporibus assumenda iste libero dolores? Vel quia quas dolor soluta maxime natus aliquam repudiandae exercitationem distinctio nobis voluptate repellendus dicta velit, enim in recusandae quisquam cum cupiditate quidem harum atque quo, a saepe at. Ad veniam sequi dolorem quia ut ea sed, dolor earum minima eius?
                </Container1>
                <Container2 className='img'>
                    <img src="https://preview.colorlib.com/theme/personal/img/hero-img.png" alt="" />
                </Container2>
            </Container>
        </>
    )
}

export default Home
