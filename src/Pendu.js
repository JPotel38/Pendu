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
        console.log(splitWord[i])
        switch (splitWord[i]) {
          case "Ä":
            splitWord[i] = "A";
            break;
          case "À":
            splitWord[i] = "A";
            break;
          case "Â":
            splitWord[i] = "A";
            break;
          case "É":
            splitWord[i] = "E";
            break;
          case "È":
            splitWord[i] = "E";
            break;
          case "Ë":
            splitWord[i] = "E";
            break;
          case "Ê":
            splitWord[i] = "E";
            break;
          case "Ü":
            splitWord[i] = "U";
            break;
          case "Ù":
            splitWord[i] = "U";
            break;
          case "Û":
            splitWord[i] = "U";
            break;
          case "Ú":
            splitWord[i] = "U";
            break;
          case "Ô":
            splitWord[i] = "O";
            break;
          case "Ö":
            splitWord[i] = "O";
            break;
          case "Ï":
            splitWord[i] = "I";
            break;
          default:
            console.log("Ok");
        }
        if (splitWord[i] == "'") {
          wordToFind.push("'")
        } else if (splitWord[i] == "-") {
          wordToFind.push("-")
        } else {
          wordToFind.push('_ ');
        }
        setHidden(wordToFind)
      }
      setValid(true)
    }
  }



  function validLetter() {
    if (letter == "ä" || letter == "à" || letter == "â") {
      letter = "a"
    }

    switch (letter) {
      case "Ä":
        letter = "A";
        break;
      case "À":
        letter = "A";
        break;
      case "Â":
        letter = "A";
        break;
      case "É":
        letter = "E";
        break;
      case "È":
        letter = "E";
        break;
      case "Ë":
        letter = "E";
        break;
      case "Ê":
        letter = "E";
        break;
      case "Ü":
        letter = "U";
        break;
      case "Ù":
        letter = "U";
        break;
      case "Û":
        letter = "U";
        break;
      case "Ú":
        letter = "U";
        break;
      case "Ô":
        letter = "O";
        break;
      case "Ö":
        letter = "O";
        break;
      case "Ï":
        letter = "I";
        break;
      default:
        console.log("Ok");
    }
    if (letter !== '') {
      setTabLetters([...tabLetters, letter + ' ']);
      for (var i = 0; i < word.length; i++) {
        if (word[i].indexOf(letter) == 0) {
          hidden.splice(i, 1, letter);
          setAddLetter(addLetter + 1);
        }
      }
      if (word.indexOf(letter) == -1) {
        setPoints(points - 1);
        setAddLetter(addLetter + 1)
      }
      setLetter('');
    }
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