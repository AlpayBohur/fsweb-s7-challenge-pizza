import React, { useEffect, useState } from "react";
import "../styles/Pizza.css";
import { Breadcrumb, BreadcrumbItem, Input } from "reactstrap";
import { Button, ButtonGroup } from "reactstrap";
import Onay from "./Onay";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { Data } from "../helpers/Data";
import * as Yup from "yup";
const pizzaForm = {
  isim: "Position Absolute Acı Pizza",
  price: 85.5,
  boyutS: "Küçük",
  boyutM: "Orta",
  boyutL: "Büyük",
  hamurİ: "İnce",
  hamurK: "Kalın",
};

//todo deneme yapıyorum

const Pizza = ({ adet, adetArttir, adetAzalt }) => {
  const [rSelected, setRSelected] = useState(null);
  const [onayFormu, setOnayFormu] = useState(false);
  const [malzemeToplam, setMalzemeToplam] = useState(0);

  if (onayFormu) {
    return <Onay to="/onay" />;
  }

  return (
    <div>
      <header className="header">
        <h1>Teknolojik Yemekler</h1>
        <Breadcrumb
          style={{ marginRight: "18rem", fontSize: "0.90rem" }}
          listTag="div"
        >
          <BreadcrumbItem
            style={{ textDecoration: "none", color: "#f8f9fa" }}
            href="/"
            tag="a"
          >
            Anasayfa
          </BreadcrumbItem>
          <BreadcrumbItem
            style={{
              textDecoration: "none",
              color: "#f8f9fa",
            }}
            href="#"
            tag="a"
          >
            Seçenekler
          </BreadcrumbItem>
          <BreadcrumbItem style={{ color: "#fff", fontWeight: "bold" }} href="">
            Sipariş Oluştur
          </BreadcrumbItem>
        </Breadcrumb>
      </header>
      {/* body  */}
      <div className="pizza-main">
        <div className="pizza-ad ">
          <h4 data-cy="pizza-ismi">{pizzaForm.isim}</h4>
          <div className="pizza-puan">
            <h3>{pizzaForm.price}₺</h3>
            <p>
              4.9&nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(200)
            </p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="pizza-tip">
          <div className="pizza-boyut">
            <h4>Boyut Seç *</h4>
            <ButtonGroup>
              <Button
                outline
                onClick={() => setRSelected(1)}
                active={rSelected === 1}
              >
                {" "}
                {pizzaForm.boyutS}
              </Button>
              <Button
                outline
                onClick={() => setRSelected(2)}
                active={rSelected === 2}
              >
                {" "}
                {pizzaForm.boyutM}
              </Button>
              <Button
                outline
                onClick={() => setRSelected(3)}
                active={rSelected === 3}
              >
                {" "}
                {pizzaForm.boyutL}
              </Button>
            </ButtonGroup>
          </div>
          <div className="pizza-hamur ">
            <h4>Hamur Seç *</h4>
            <select id="size-dropdown" class="ui dropdown">
              <option value="">Hamur Kalınlığı</option>
              <option value="1">Kalın Hamur</option>
              <option value="0">İnce Hamur</option>
            </select>
          </div>
        </div>
        <div className="pizza-ek">
          <h4>Ek Malzemeler</h4>
          <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <div className="checkboxs-map">
            {Data.map((dataItem, key) => {
              return (
                <div className="checkboxs">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={dataItem.malzeme}
                    />
                  </FormGroup>
                </div>
              );
            })}
          </div>
        </div>
        <div className="not">
          <h4>Sipariş Notu</h4>
          <div>
            <Input
              type="text"
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </div>
          <hr />
        </div>
        <div className="pizza-fiyat">
          <div className="pizza-adet">
            <Button color="warning" onClick={adetAzalt} disabled={!adet}>
              -
            </Button>
            <div className="sayi">{adet}</div>
            <Button color="warning" onClick={adetArttir}>
              +
            </Button>
          </div>
          <div className="pizza-onay">
            <div className="onay-metin">
              <h4>Sipariş Toplamı</h4>
              <p>Seçimler </p>
              <p>Toplam {pizzaForm.price}</p>
            </div>
            <Button
              id="order-button"
              color="warning"
              onClick={() => {
                setOnayFormu(true);
              }}
            >
              Sipariş Ver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
