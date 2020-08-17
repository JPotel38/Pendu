import React, { useState, useEffect } from 'react';
import { Typography, Input, Row, Col, Button, Layout, Modal } from 'antd';

const { Title } = Typography;
const { Content } = Layout;


function Pendu() {

  const [points, setPoints] = useState(10);
  const [word, setWord] = useState('');
  const [hidden, setHidden] = useState();
  const [addLetter, setAddLetter] = useState(0)
  const [valid, setValid] = useState(false);
  const [letter, setLetter] = useState('');
  const [finish, setFinish] = useState(false);
  const [tabLetters, setTabLetters] = useState([]);

  var wordToFind = [];
  var splitWord;

  useEffect(() => {
    function ifFinish() {

      if (hidden != undefined && JSON.stringify(word) == JSON.stringify(hidden)) {
        setValid(false);
        setFinish(true);
        alert("Gagné!");
      } else if (points == 0) {
        setValid(false);
        setFinish(true);
        alert("Perdu !");
      }
    } ifFinish()
  }, [addLetter]);


  function validWord() {
    if (word.length == 0) {
      alert("Choisissez un mot !");
    } else {
      splitWord = word.split("");
      setWord(splitWord)
      for (var i = 0; i < splitWord.length; i++) {
        wordToFind.push('_ ');
        setHidden(wordToFind)
      }
      setValid(true)
    }
  }

  function validLetter() {
    setTabLetters([...tabLetters, letter + ' ']);
    var index = word.indexOf(letter)
    if (index !== -1) {
      hidden.splice(index, 1, letter);
      setAddLetter(addLetter + 1);
    } else {
      setPoints(points - 1);
      setAddLetter(addLetter + 1);
    }
    setLetter('')
  }

  function again() {
    setValid(false);
    setFinish(false);
    setHidden('');
    setWord('');
    setTabLetters([]);
  }

  if (valid == true) {
    return (

      <Layout style={{ height: "100vh" }}>
        <Layout style={{ heigth: "auto" }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
              <Row>
                <Col>
                  <Title>Pendu</Title>
                </Col>
              </Row>
              <Row>
                <Col span={16} offset={8}>
                  <Title level={2}>Au deuxième joueur de deviner !</Title>
                </Col>
              </Row>
              <Row>
                <Col span={16} offset={8}>
                  <p style={{ fontSize: 30 }}>Mot à trouver : {hidden.toString()}</p>
                </Col>
              </Row>
              <Row>
                <Col span={8} offset={8}>
                  <p style={{ fontSize: 30 }}>Lettres utilisées : {tabLetters}</p>
                </Col>
              </Row>
              <Row >
                <Col span={4} offset={8}>
                  <Input type="text" maxLength="1" placeholder="Votre lettre" onChange={(e) => setLetter(e.target.value.toUpperCase())}
                    value={letter} />
                  <Button type="submit" style={{ marginTop: 20 }} onClick={() => validLetter()}>  Ok</Button>
                </Col>
              </Row>
              <Row>
                <Col span={16} offset={8}>
                  <p style={{ fontSize: 30 }}>Points : {points}</p>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    )

  } else if (finish == true) {
    return (
      <Layout style={{ height: "100vh" }}>
        <Layout style={{ heigth: "auto" }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
              <Row>
                <Col span={16} offset={8}>
                  <Button className="button" shape="round" target="_blank" style={{ marginTop: 30, fontSize: 30 }} onClick={() => again()}> Recommencer</Button>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  } else {

    return (
      <Layout style={{ height: "100vh" }}>
        <Layout style={{ heigth: "auto" }}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, height: "100%" }}>
              <Row>
                <Col>
                  <Title>Pendu</Title>
                </Col>
              </Row>
              <Row>
                <Col span={16} offset={8}>
                  <Title level={2}>Le premier joueur doit choisir le mot</Title>
                </Col>
              </Row>
              <Row >
                <Col span={8} offset={8}>
                  <Input type="text" placeholder="Mot" onChange={(e) => setWord(e.target.value.toUpperCase())}
                    value={word} />
                  <Button type="submit" style={{ marginTop: 20 }} onClick={() => validWord()}>  Ok</Button>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Pendu;