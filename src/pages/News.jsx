import React, { useState } from "react";
import "../sass/pages/news.scss";
import {
  dataBlogMovie,
  dataHotMovie,
} from "../components/subcomponents/Datafake";
import Voucher from "../components/subcomponents/Voucher";

function ItemBlogMovie({ item }) {
  return (
    <div className="item24h_item">
      <img src={item.image} alt="" />
      <div className="item24h_right">
        <div className="item24h_right_title">{item.title}</div>
        <div className="item24h_right_time">{item.time}</div>
        <div className="item24h_right_time">{item.content}</div>
      </div>
    </div>
  );
}
function ItemHotMovie({ item }) {
  return (
    <div className="item24h_item">
      <img src={item.image} alt="" />
      <div className="item24h_right">
        <div className="item24h_right_title">{item.title}</div>

        <div className="item24h_right_time">{item.content}</div>
      </div>
    </div>
  );
}
const News = () => {
  const [review, setReView] = useState(true);
  const [hotmovie, setHotmovie] = useState(false);
  const [vocher, setVocher] = useState(false);

  return (
    <div className="news">
      <div className="main">
        <div className="noBE">No Backend</div>
        <div className="tag_movie">
          <div>
            <div className="menu24h">
              <ul>
                <li
                  onClick={() => {
                    setReView(true);
                    setHotmovie(false);
                    setVocher(false);
                  }}
                  style={review ? { color: "orange" } : null}
                >
                  Movie Reviews
                </li>
                <li
                  onClick={() => {
                    setReView(false);
                    setVocher(false);
                    setHotmovie(true);
                  }}
                  style={hotmovie ? { color: "orange" } : null}
                >
                  Hot movies
                </li>
                <li
                  onClick={() => {
                    setVocher(true);
                    setReView(false);
                    setHotmovie(false);
                  }}
                  style={vocher ? { color: "orange" } : null}
                >
                  Vochers
                </li>
                {/* <li>Career</li>
                <li>promotion</li> */}
                <li className="dkdn">Fixgo - Fan cu???ng C??c T???nh Y</li>
              </ul>
            </div>
            <div className="themain24h">
              {vocher ? (
                <Voucher />
              ) : (
                <>
                  {" "}
                  <div className="main24htrai">
                    {review ? (
                      <>
                        <div className="title">Movie Review</div>
                        <div className="main24htrai_1">
                          <div className="left_trai">
                            <img
                              src="https://cdn.galaxycine.vn/media/2022/8/14/preview-black-adam-dwayne-johnson-thanh-phan-anh-hung-cuc-suc-6_1660454758375.jpg"
                              alt=""
                            />
                            <div className="title24h">
                              [Review] Black Adam: C???u Tinh Cho V?? Tr??? DC M???
                              R???ng?
                            </div>
                            <div className="noidung24h">
                              V???i kinh ph?? 200 tri???u $, Black Adam g??nh tr??n vai
                              tr??ch nhi???m n???ng n??? ??? ph???c h??ng v?? tr??? DC m??? r???ng
                              sau h??ng n??i kh?? kh??n. Wonder Woman 1984 th???t b???i,
                              Bagirl ???ra chu???ng g?????, The Flash g???p nguy c?? kh???i
                              chi???u v?? Ezra Miller l???m t??i nhi???u t???t... ?????n c???
                              th????ng hi???u t??? ???? Aquaman c??ng lao ??ao ph???i d???i
                              l???ch chi???u v?? Amber Heard thua Johnny Depp trong
                              v??? ki???n t???ng ????nh ????m g???n ????y.
                            </div>
                          </div>
                          <div className="right_trai">
                            <img
                              src="https://cdn.galaxycine.vn/media/2022/8/6/alienoid-cuoc-chien-xuyen-khong-bom-tan-vuot-qua-moi-gioi-han-tuong-tuong-1_1659803666009.jpg"
                              alt=""
                            />
                            <div className="title24hx">
                              [Review] Alienoid Cu???c Chi???n Xuy??n Kh??ng: Bom T???n
                              V?????t Qua M???i Gi???i H???n T?????ng T?????ng!
                            </div>
                            <div className="noidung24hx">
                              [Review] C?????i: L???i Nguy???n S??? Kh??ng D???ng L???i!
                            </div>
                            <div className="noidung24hx">
                              [Review] C?? G??i T??? Qu?? Kh???: ?????p ????? Ho??n To??n G??i
                              Gi?? L???m Chi??u?
                            </div>
                            <div className="noidung24hx">
                              [Preview] Black Panther Wakanda Forever: T???Challa
                              Hi Sinh Trong Tr???n Chi???n V???i Atlantis?
                            </div>
                          </div>
                        </div>
                        <div className="title">Movie Blog</div>
                        <div className="main24htrai_2">
                          {dataBlogMovie.map((item, index) => (
                            <ItemBlogMovie key={index} item={item} />
                          ))}
                        </div>
                        <div className="main24htrai_3">
                          <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/red9YvYlPWg"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="title" style={{ marginBottom: "10px" }}>
                          Hot Movie
                        </div>
                        {dataHotMovie.map((item, index) => (
                          <ItemHotMovie key={index} item={item} />
                        ))}
                      </>
                    )}
                    {/* hot movie */}
                  </div>
                  <div className="main24hphai">
                    <img
                      src="https://64.media.tumblr.com/f14da695c8d48b26368ed984db8f9b8a/tumblr_nqx83r5hqP1qczmzbo1_500.gif"
                      alt=""
                    />
                    <div className="chudehot">CH??? ????? HOT</div>
                    <div className="taghot">
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;????n ch???
                        c??c si??u ph???m r???p c???n t???t 2022
                      </button>
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Th??? gi???i
                        anime
                      </button>
                      <button>
                        <i class="fa-regular fa-circle-dot"></i>&ensp;T???t t???n
                        t???t v??? Spider Man
                      </button>
                      <button>
                        {" "}
                        <i class="fa-regular fa-circle-dot"></i>&ensp;S??? kh??c
                        bi???t gi???a Marvel v?? DC
                      </button>
                      <button>
                        {" "}
                        <i class="fa-regular fa-circle-dot"></i>&ensp;Ch??m si??u
                        anh h??ng DC ra m???t n??m 2022
                      </button>
                    </div>
                    <div className="chudegachduoi">TH???O LU???N NHI???U</div>
                    <div className="thethaoluannhieu">
                      <div className="so">1</div>
                      <div className="noidungso">
                        Ezra Miller Ch??m Trong Scandal, T????ng Lai N??o Cho The
                        Flash V?? DCEU?
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">2</div>
                      <div className="noidungso">
                        Chi Ti???t ??o???n Phim Doctor Strange 2 Tr??nh Chi???u T???i
                        Comic Con
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">3</div>
                      <div className="noidungso">
                        B??c Tr???ng Ph???c Sinh Doctor Strange In The Multiverse Of
                        Madness!
                      </div>
                    </div>
                    <div className="thethaoluannhieu">
                      <div className="so">4</div>
                      <div className="noidungso">
                        Trailer Thor: Love And Thunder Ti???t L??? K??? S??t Th???n ????ng
                        S???
                      </div>
                    </div>
                    <div className="chudexanh">EVocher</div>
                    <div className="thegioithieu24hx">
                      <div className="item_thegioithieux">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg"
                          alt=""
                        />
                        <div>VNPAY-QR T???ng Deal C???c Ch??y</div>
                      </div>
                      <div className="item_thegioithieux">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg"
                          alt=""
                        />
                        <div>Tung Deal IELTS - Ph?? C??ng Bom T???n</div>
                      </div>
                    </div>
                    <div className="thegioithieu24h">
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/14/vnpay_1665735135975.jpg"
                          alt=""
                        />
                        <div>VNPAY-QR T???ng Deal C???c Ch??y</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/5/300x450-gc_1664939520575.jpg"
                          alt=""
                        />
                        <div>Tung Deal IELTS - Ph?? C??ng Bom T???n</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/10/27/back2shool-digital-300x450-1663573378238_1666859670287.jpg"
                          alt=""
                        />
                        <div>Fixgo Cinema - Back To School 2022</div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani ch??o s??n: Gi???m ngay 40,000 VN?? tr??n gi?? v?? xem
                          phim t???i h??? th???ng r???p Galaxy Cinema to??n qu???c.
                        </div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani ch??o s??n: Gi???m ngay 40,000 VN?? tr??n gi?? v?? xem
                          phim t???i h??? th???ng r???p Galaxy Cinema to??n qu???c.
                        </div>
                      </div>
                      <div className="item_thegioithieu">
                        <img
                          src="https://cdn.galaxycine.vn/media/2022/9/21/glx-vani-1200x1800_1663745251301.jpg"
                          alt=""
                        />
                        <div>
                          Vani ch??o s??n: Gi???m ngay 40,000 VN?? tr??n gi?? v?? xem
                          phim t???i h??? th???ng r???p Galaxy Cinema to??n qu???c.
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="tag_movie"
          style={{ marginTop: "10px", borderTop: "1px solid gray" }}
        >
          <div className="title">Fixgo Cinema</div>
          <div>
            <br />
            Th??? gi???i ??i???n ???nh ???????c v?? nh?? m???t v??ng ?????t ??ang ph??t tri???n m??? r???ng
            m???i ng??y. N??i ?????n ??i???n ???nh th?? c??ng ??i s??u s??? c??ng kh??m ph?? ra nhi???u
            kh??a c???nh m???i.
            <br />
            <br />
            S??? c?? ng?????i th??ch th?? v???i vai tr?? c???a ?????o di???n. Mu???n hi???u r?? xem ?????o
            di???n c???n l??m nh???ng c??ng vi???c g??, nguy??n nh??n v?? ?????ng l???c g?? khi???n h???
            g???n b?? l??m ngh???. B??n c??ng c?? l??c l???i mu???n bi???t l?? do v?? sao nh???ng
            nh?? l??m phim kia l???i c?? th??? s??ng t???o nhi???u c??u chuy???n th?? v??? ?????n
            th???.
            <br />
            <br />
            N??i v??? di???n vi??n, ?????i t?? c???a c??c ng??i sao lu??n l?? ??i???u khi???n c??ng
            ch??ng t?? m??. H??? thay ?????i nh?? c???a, mua th??m si??u xe..., th???m ch?? l??
            cu???c s???ng t??nh c???m c?? v???n ?????. T???t c??? ?????u l?? nh???ng tin t???c lu??n h???p
            d???n m???i ng?????i.
            <br />
            <br />
            M???t t??c ph???m ??ang chi???u t???i r???p chi???u phim v?? ???????c b??n t??n kh???p n??i.
            B???n t??? h???i r???ng n?? c?? hay kh??ng, c?? n??n cu???n theo s??? ????ng ????? th???
            tr???i nghi???m, nh??ng gi??? b???n c???n m???t l???i g???i ?? ho???c m???t l???i khuy??n
            kh??ch quan nh???t, ph???i l??m sao?
            <br />
            <br />
            B???n v?? t??nh xem ???????c m???t th?????c phim c??, c???m th???y n?? qu?? tuy???t v???i,
            c??ng b???t ng??? h??n khi trong qu?? kh??? phim t???ng c??n qu??t v?? s??? gi???i
            th?????ng. Gi??? ????y khi mu???n hi???u r?? h??n v??? th??ng ??i???p c???a phim, nh???ng
            c??u chuy???n b?? m???t ph??a sau h???u tr?????ng. Li???u ph???i l??m th??? n??o? <br />
            <br />
            T???i sao c??c ?????o di???n l???i s??? d???ng g??c m??y nh?? th??? kia tr??n phim, v??
            sao ng?????i di???n vi??n n??y l???i c?? th??? ????ng ?????t nh?? v???y? T??m c??u tr??? l???i
            ??? ????u b??y gi???. Ch??o m???ng b???n ?????n th?? vi???n ??i???n ???nh Fixgo Cinema, n??i
            cung c???p c??c b??i vi???t v??? nh???ng th?????c phim kinh ??i???n, th??ng tin h???u
            tr?????ng th?? v??? c???a nh???ng phim hay v?? c??c bom t???n ??ang chi???u t???i Fixgo
            Cinema.
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
