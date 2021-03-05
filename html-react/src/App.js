import logo from './logo.svg';
import './App.css';
import './main'

function App() {
  return (
    <div className="App">
      <div>
        <div className="container">
          <div className="row" style={{ marginBottom: 15 }} id="input">
            <div className="col-md-3 col-sm-3 col-lg-2 col-6">
              <p style={{ marginTop: 20, color: 'rgb(159, 224, 28)', fontSize: 16 }}>demo_5048</p><p>
              </p></div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-3">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: 'white', color: 'black', border: 'none', marginTop: 14 }}>
                  <i className="fa fa-globe text-muted" aria-hidden="true" />
                </button>
                <div className="dropdown-menu text-muted" aria-labelledby="triggerId">
                  <a className="dropdown-item "><i className="fa fa-globe" aria-hidden="true" /> Đổ cuộc gọi đến app và sipphone</a>
                  <a className="dropdown-item "><i className="fa fa-phone-square" aria-hidden="true" /> Đổ cuộc gọi đến số điện thoại</a>
                  <a className="dropdown-item"><i className="fa fa-mobile" aria-hidden="true" /> Đổ cuộc gọi đến app</a>
                  <a className="dropdown-item"><i className="fas fa-phone-volume    " /> Đổ cuộc gọi đến ipphone</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-3">
              <img id="hover" style={{ marginTop: 32, marginLeft: 20, marginRight: 5 }} src="https://static.stringee.com/web_phone/lastest/images/icon-minimize.svg" />
              <img id="hover" style={{ marginTop: 27 }} src="https://static.stringee.com/web_phone/lastest/images/icon-close-no-border.svg" onlick="cancel()" />
            </div>
          </div>
          <div className="row" id="input" style={{ padding: 5 }}>
            <div className="col-md-5 col-sm-5 col-lg-3 col-11 ">
              <div className="form-group row">
                <label htmlFor />
                <input type="text" name id="result" className="form-control" placeholder={+84} aria-describedby="helpId" style={{ border: 'none', fontSize: 24, color: 'black' }} />
              </div>
            </div>
            <div className="col-md-1 col-sm-1 col-lg-1 col-1">
              <p id="hover" style={{ marginTop: 6, fontSize: 25 }}><i className="fa fa-times-circle" style={{ marginLeft: '-10px', color: '#CCCCCC' }} aria-hidden="true" onclick="result.value=''" /></p>
            </div>
          </div>{/*ENd row input*/}
          {/* Row button*/}
          <div className="row" id="row-number" style={{ textAlign: 'center' }}>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='1'">
              <span id="number">1</span><br />
              <p id="text" />
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='2'">
              <span id="number">2</span><br />
              <p id="text">ABC</p>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='3'">
              <span id="number">3</span><br />
              <p id="text">DEF</p>
            </div>
          </div>
          <div className="row" id="row-number" style={{ textAlign: 'center' }}>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='4'">
              <span id="number">4</span><br />
              <p id="text">GHI</p>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='5'">
              <span id="number">5</span><br />
              <p id="text">JKL</p>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='6'">
              <span id="number">6</span><br />
              <p id="text">MNO</p>
            </div>
          </div>
          <div className="row" id="row-number" style={{ textAlign: 'center' }}>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='7'">
              <span id="number">7</span><br />
              <p id="text">PQRS</p>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='8'">
              <span id="number">8</span><br />
              <p id="text">TUV</p>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='9'">
              <span id="number">9</span><br />
              <p id="text">WXYZ</p>
            </div>
          </div>
          <div className="row" id="row-number" style={{ textAlign: 'center' }}>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='*'">
              <span id="number">*</span><br />
              <p style={{ height: 15 }} />
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='0'">
              <span id="number">0</span><br />
              <p style={{ height: 15 }} />
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" id="btn" onclick="result.value+='#'">
              <span id="number">#</span><br />
              <p style={{ height: 15 }} />
            </div>
          </div>
        </div>
        <div className="container footer">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-12 ">
              <span style={{ color: '#cccc', fontSize: 10 , textAlign:'left'}}><b>Sử dụng số </b></span>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-12">
              <p style={{ height: 10, marginBottom: '-5px' }} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-5 col-lg-2 col-12" id="hover" style={{ backgroundColor: '#F2F7FE', borderRadius: 8, float: 'left', display: 'inline-flex' }}>
              <div style={{ margin: 10 }}>
                <span id style={{ fontSize: 14, fontWeight: 500 }}><b>Not Available</b></span>
                <br />
                <span id style={{ fontSize: 12, fontFamily: 'Averta-Semibold' }}>Not Available</span>
              </div>
            </div>
            <div className="col-md-2 col-sm-1 col-lg-1 col-12" id="hover" style={{ backgroundColor: '#F2F7FE', textAlign: 'right' }}>
              <div style={{ marginTop: 20 }}>
                <i className="fas fa-angle-down" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3 col-6 bg-light">
              <p />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3 col-6 bg-light">
              <p />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-3 col-6 bg-light">
              <p />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" style={{ textAlign: 'center' }}>
              <i id="hover" className="fa fa-list " aria-hidden="true" style={{ fontSize: 25, color: '#cccc' }} />
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" style={{ textAlign: 'center', marginTop: '-40px' }}>
              <button style={{ backgroundColor: '#66D54B', width: 70, height: 70, borderRadius: 40, borderWidth: 0 }}><i style={{ color: 'white' }} className="fas fa-phone" /></button>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-1 col-4" style={{ textAlign: 'center', boxShadow: '#cccc' }}>
              <i id="hover" className="fa fa-user " aria-hidden="true" style={{ fontSize: 25, color: '#cccc' }} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
