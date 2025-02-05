import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProfileSidebar from "../components/ProfileSidebar";

const ChooseLang = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    console.log(`Language switched to: ${lang}`);
  };

  useEffect(() => {
    console.log("123456789");
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <ProfileSidebar />
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="dashboard-wraper">
              <div className="form-submit">
                <div className="submit-section">
                  <h4>{t("change_language")}</h4>
                  <hr />
                  <form>
                    <div className="form-row">
                      {/* Portuguese Language Option */}
                      <div className="form-group col-md-12">
                        <label
                          htmlFor="lang-pt"
                          style={{
                            display: "inline-flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            background: "#f7f6fa",
                            padding: 10,
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <img
                              src="assets/img/portg.png"
                              alt="Portuguese"
                              style={{ marginRight: 8 }}
                            />
                            {t("Portuguese")}
                          </span>
                          <input
                            type="radio"
                            id="lang-pt"
                            name="language"
                            checked={i18n.language === "pt"}
                            onClick={() => handleLanguageChange("pt")}
                            style={{ position: "static" }}
                          />
                        </label>
                      </div>
                      <div className="form-group col-md-12">
                        <label
                          htmlFor="lang-en"
                          style={{
                            display: "inline-flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            background: "#f7f6fa",
                            padding: 10,
                            cursor: "pointer",
                          }}
                        >
                          <span>
                            <img
                              src="assets/img/eng.png"
                              alt="English"
                              style={{ marginRight: 8 }}
                            />
                            {t("English")}
                          </span>
                          <input
                            type="radio"
                            id="lang-en"
                            name="language"
                            checked={i18n.language === "en"}
                            onClick={() => handleLanguageChange("en")}
                            style={{ position: "static" }}
                          />
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseLang;
