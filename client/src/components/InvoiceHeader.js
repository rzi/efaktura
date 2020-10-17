import React, { Component } from "react";
import Select from "react-select";
import { Container, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import "bootstrap/dist/css/bootstrap.min.css";
class InvoiceHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate);
  }
  render() {
    const options = [
      { value: "bez_oznaczen", label: "Bez Oznaczeń" },
      { value: "oryginał", label: "Oryginał" },
      { value: "kopia", label: "Kopia" },
      { value: "duplikat", label: "Duplikat" },
    ];
    const options1 = [
      { value: "Faktura", label: "Faktura VAT" },
      { value: "Faktura_korygująca", label: "Faktura korygująca" },
      { value: "Nota_korygująca", label: "Nota korygująca" },
      { value: "Paragon", label: "Paragon" },
    ];
    // const [startDate, setStartDate] = useState(new Date());
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div>Dokument</div>
              <Select options={options} defaultValue={options[1]} />
            </Col>
            <Col>
              <div>Typ</div>
              <Select options={options1} defaultValue={options1[0]} />
            </Col>
            <Col>
              <div>Data wystawienia</div>
              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
              {/* <form onSubmit={this.onFormSubmit}>
              <div className="form-group"> */}
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                name="startDate"
                dateFormat="MM/dd/yyyy"
              />

              {/* </div>
            </form> */}
            </Col>
            <Col>
              <div>Data sprzedaży</div>
              {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}
              <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    name="startDate"
                    dateFormat="MM/dd/yyyy"
                  />
                  {/* <button className="btn btn-primary">Show Date</button> */}
                </div>
              </form>
            </Col>
            <Col>
              <div>Miejsce wystawienia</div>
              <input></input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card body outline color="secondary">
                <CardTitle>Dane sprzedawcy</CardTitle>
                <CardText>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Sprzedawca
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      NIP
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Ulica
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Miasto
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Kod
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </CardText>
                <Button>Wczytaj z Bazy Danych</Button>
              </Card>
            </Col>
            <Col>
            <Card body outline color="secondary">
                <CardTitle>Dane nabywcy</CardTitle>
                <CardText>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Nabywca
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      NIP
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Ulica
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Miasto
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Kod
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </CardText>
                <Button>Wczytaj z Bazy Danych</Button>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
          <Col>
            <Card body outline color="secondary">
                <CardTitle>Dane nabywcy</CardTitle>
                <CardText>

                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Nabywca
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      NIP
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Ulica
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Miasto
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-sm">
                      Kod
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                </CardText>
                <Button>Wczytaj z Bazy Danych</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default InvoiceHeader;
