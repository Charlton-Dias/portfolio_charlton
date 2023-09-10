import { Avatar, Box, CardHeader, Chip, Link } from "@mui/material";
import { Col, Container } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

export default function Sidebar() {
  return (
    <>
      <StickyBox offsetTop={20} offsetBottom={20} >
        <Box
          border={1} d
          display={"flex"}
          flexDirection={"column"}
          borderRadius={'10px'}
          padding={2}
          alignItems={'center'}
          justifyContent={"center"}
          borderColor={"#ccc"}
          backgroundColor={'#1e1e1f'}
        >
          <Avatar alt='Display picture' style={{ height: '150px', width: '150px', borderRadius: '15px' }} src="src/avatar.jpeg" />
          <CardHeader title='Charlton Dias' style={{ color: 'white' }} />

          <Chip variant="outlined" label="Software Developer" style={{ color: 'white' }} />
          <hr />

          <Container style={{ display: 'flex', textAlign: 'left', flexDirection: 'column', color: 'white' }}  >
            <Col style={{ flex: 1, marginBottom: '10px' }}>
              <AiFillGithub size={24} />
              <Link underline="none" color='none' href="https://github.com/Charlton-Dias"> github.com/Charlton-Dias</Link>
            </Col>

            <Col style={{ marginBottom: '10px' }}>
              <AiFillLinkedin size={24} />
              <Link underline="none" color='none' href="https://in.linkedin.com/in/charlton-dias"> linkedin.com/in/charlton-dias</Link>
            </Col>

            <Col style={{ marginBottom: '10px', alignItems: 'flex-start' }}>
              <AiOutlineMail size={24} />
              <Link underline="none" color='none' href="mailto:charltondias29@gmail.com"> charltondias29@gmail.com</Link>
            </Col>
            <Col style={{ marginBottom: '10px' }}>
              <BiCurrentLocation size={24} />
              <> Margao, Goa, India</>
            </Col>
          </Container>
        </Box>


      </StickyBox>
    </>
  )
}