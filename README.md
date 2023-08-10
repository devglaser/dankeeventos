# Danke Eventos
---

<section id={index.sectionSobre}>
          <main className="autoPadding fixedWidth" id={index.sobre}>
            <div>
              <h1 className="titulo">
                {textsLangs.home.aboutSection.title[currentLanguage]}
              </h1>

              <h2 className="subtitulo">
                {textsLangs.home.aboutSection.caption[currentLanguage]}
              </h2>

              <div>
                <BotaoAcao texto={textsLangs.buttons.actionButton[currentLanguage]} />
                <Link href="/sobre">{textsLangs.buttons.aboutButton[currentLanguage]}</Link>
              </div>
            </div>
          </main>
        </section>