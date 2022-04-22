import React, {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { GET_CHAPTER_VIEW } from '../../cache/queries';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';

const ContentViewScreen = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  // const { loading, error, data, refetch } = useQuery(GET_CHAPTER_VIEW, {
  //   variables: { chapterID:id },
  // });
  const [GetChapterView, { loading, error, data, refetch }] = useLazyQuery(GET_CHAPTER_VIEW);
  const [chapter, setChapter] = useState({})
  const [chapterTitles, setChapterTitles] = useState([])
  const [chapterIds, setChapterIds] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentChapter, setCurrentChapter] = useState("")
  async function fetchData() {
    let result = await GetChapterView({variables: {chapterID:id}});
    
    setChapter(result.data.getChapterView.chapter);
    setChapterTitles(result.data.getChapterView.chapter_titles)
    setChapterIds(result.data.getChapterView.chapter_ids)
    setCurrentChapter(result.data.getChapterView.chapter.chapter_title)
    // console.log(pageBackground)
  }

  useEffect(() => {
    fetchData();
  },[]);
  // const { loading, error, data, refetch } = useQuery(GET_CHAPTER_VIEW, {variables:{chapterID: id}});
  // Conditionally render ComicViewScreen or StoryViewScreen depending on what the content pulled was
  const [seriesTitle, setSeriesTitle] = useState("One Punch Man")
  const [chapterTitle, setChapterTitle] = useState("The Return of the S Tier Hero")
  const [contentType, setContent] = useState("S")
  // console.log(chapter)
  // console.log(chapterTitles)
  // console.log(chapterIds)
  const handleChapter = (objectId, chapterTitle) => {
    // console.log(objectId);
    
    // setCurrentPage(1)
    // navigate(`/view/${objectId}`);

    fetchData();
  }

  const handlePage = (page) => {
    setCurrentPage(page)
  }
  console.log(currentPage)
  console.log(chapter)
  return (
    <div>
      {chapter.content_type === "S"? 
        <div>
        <div className="flex flex-row justify-between">
          <div className="ml-4">
            Series Title: <strong>{seriesTitle}</strong>
          </div>
          
          <div className="dropdown mr-4">
            <label tabindex="0" class="select select-bordered h-8 min-h-0 w-100">Chapter: {chapter.chapter_title}</label>
            <ul tabindex="0" class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-52 rounded-box overflow-hidden max-h-80">
              
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
        <p className="mr-10 ml-10 mt-10"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et certamen honestum et disputatio splendida! omnis est enim de virtutis dignitate contentio. Non semper, inquam; Duo Reges: constructio interrete. Falli igitur possumus. Quia dolori non voluptas contraria est, sed doloris privatio. Zenonis est, inquam, hoc Stoici. Et ille ridens: Video, inquit, quid agas; Quid enim me prohiberet Epicureum esse, si probarem, quae ille diceret?

        Quid, cum fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate legimus? E quo efficitur, non ut nos non intellegamus quae vis sit istius verbi, sed ut ille suo more loquatur, nostrum neglegat. Sed in ceteris artibus cum dicitur artificiose, posterum quodam modo et consequens putandum est, quod illi §pigennhmatikÒn appellant; Mihi quidem Antiochum, quem audis, satis belle videris attendere. Respondent extrema primis, media utrisque, omnia omnibus. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Eorum enim est haec querela, qui sibi cari sunt seseque diligunt. Tum ille: Finem, inquit, interrogandi, si videtur, quod quidem ego a principio ita me malle dixeram hoc ipsum providens, dialecticas captiones. Quae cum dixissem, Habeo, inquit Torquatus, ad quos ista referam, et, quamquam aliquid ipse poteram, tamen invenire malo paratiores. Immo istud quidem, inquam, quo loco quidque, nisi iniquum postulo, arbitratu meo.

        Omnes enim iucundum motum, quo sensus hilaretur. Post enim Chrysippum eum non sane est disputatum. Curium putes loqui, interdum ita laudat, ut quid praeterea sit bonum neget se posse ne suspicari quidem. Quod praeceptum quia maius erat, quam ut ab homine videretur, idcirco assignatum est deo. Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae. Aliena dixit in physicis nec ea ipsa, quae tibi probarentur; Erit enim mecum, si tecum erit. Cave putes quicquam esse verius. Nihil opus est exemplis hoc facere longius. Illi enim inter se dissentiunt. Vides igitur te aut ea sumere, quae non concedantur, aut ea, quae etiam concessa te nihil iuvent. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?

        Obscura, inquit, quaedam esse confiteor, nec tamen ab illis ita dicuntur de industria, sed inest in rebus ipsis obscuritas. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus. Polycratem Samium felicem appellabant. In qua si nihil est praeter rationem, sit in una virtute finis bonorum;

        Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quibus ego vehementer assentior. Praeclare, inquit, facis, cum et eorum memoriam tenes, quorum uterque tibi testamento liberos suos commendavit, et puerum diligis. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Summum a vobis bonum voluptas dicitur. Immo alio genere;

        Cur, nisi quod turpis oratio est? Invidiosum nomen est, infame, suspectum. Cur ipse Pythagoras et Aegyptum lustravit et Persarum magos adiit?

        Cuius tanta tormenta sunt, ut in iis beata vita, si modo dolor summum malum est, esse non possit. An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Sed audiamus ipsum: Compensabatur, inquit, tamen cum his omnibus animi laetitia, quam capiebam memoria rationum inventorumque nostrorum. Quod autem meum munus dicis non equidem recuso, sed te adiungo socium. Apparet statim, quae sint officia, quae actiones. Tubulum fuisse, qua illum, cuius is condemnatus est rogatione, P. Hi autem ponunt illi quidem prima naturae, sed ea seiungunt a finibus et a summa bonorum; His similes sunt omnes, qui virtuti student levantur vitiis, levantur erroribus, nisi forte censes Ti. Tum, Quintus et Pomponius cum idem se velle dixissent, Piso exorsus est. Quis est tam dissimile homini.

        In ipsa enim parum magna vis inest, ut quam optime se habere possit, si nulla cultura adhibeatur. Primum non saepe, deinde quae est ista relaxatio, cum et praeteriti doloris memoria recens est et futuri atque inpendentis torquet timor? Sed tamen intellego quid velit. Aut, si esses Orestes, Pyladem refelleres, te indicares et, si id non probares, quo minus ambo una necaremini non precarere? Quo plebiscito decreta a senatu est consuli quaestio Cn. At enim, qua in vita est aliquid mali, ea beata esse non potest. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem.

        Intrandum est igitur in rerum naturam et penitus quid ea postulet pervidendum; Hoc est non dividere, sed frangere. Stoici scilicet. Etiam inchoatum, ut, si iuste depositum reddere in recte factis sit, in officiis ponatur depositum reddere; Alia quaedam dicent, credo, magna antiquorum esse peccata, quae ille veri investigandi cupidus nullo modo ferre potuerit. Est, ut dicis, inquam. Fortitudinis quaedam praecepta sunt ac paene leges, quae effeminari virum vetant in dolore. Quae quidem vel cum periculo est quaerenda vobis; Itaque ne iustitiam quidem recte quis dixerit per se ipsam optabilem, sed quia iucunditatis vel plurimum afferat.

        Peccata paria. Neque solum ea communia, verum etiam paria esse dixerunt. Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. Istam voluptatem perpetuam quis potest praestare sapienti? Res tota, Torquate, non doctorum hominum, velle post mortem epulis celebrari memoriam sui nominis. Utrum igitur percurri omnem Epicuri disciplinam placet an de una voluptate quaeri, de qua omne certamen est? Scrupulum, inquam, abeunti; Sed memento te, quae nos sentiamus, omnia probare, nisi quod verbis aliter utamur, mihi autem vestrorum nihil probari. Non elogia monimentorum id significant, velut hoc ad portam: Hunc unum plurimae consentiunt gentes populi primarium fuisse virum. Multoque hoc melius nos veriusque quam Stoici. Quod et posse fieri intellegimus et saepe etiam videmus, et perspicuum est nihil ad iucunde vivendum reperiri posse, quod coniunctione tali sit aptius. Quis istud possit, inquit, negare? Quod est, ut dixi, habere ea, quae secundum naturam sint, vel omnia vel plurima et maxima. Quid ergo aliud intellegetur nisi uti ne quae pars naturae neglegatur? At enim, qua in vita est aliquid mali, ea beata esse non potest.
          </p>
        </div>
        </div>
        

      :
      <div>
        <div className="flex flex-row justify-between">
          <div className="ml-4">
            Series Title: <strong>{chapter.series_title}</strong>
          </div>
          
            <div className="dropdown">
              <label tabindex="0" class="select select-bordered h-8 min-h-0 w-100">Chapter : {currentChapter}</label>
              <ul tabindex="0" class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-52 rounded-box overflow-hidden max-h-80">
                {chapterTitles.map((chapterTitle, i) => {
                  return (
                    <Link to={`/view/${chapterIds[i]}`}>
                    <li key={i}>
                      <a
                        onClick={() => handleChapter(chapterIds[i], chapterTitle)}
                        className="text-sm py-1.5 h-8 hover:bg-gray-400/25"
                      >
                          {chapterTitle}
                      </a>
                    </li>
                    </Link>
                  );
                })}
              </ul>
            </div>

            <div className="dropdown mr-4">
              <label tabindex="0" class="select select-bordered h-8 min-h-0 w-100">Page {currentPage}</label>
              <ul tabindex="0" class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-24 rounded-box overflow-hidden max-h-80">
          
              </ul>
            </div>
          </div>
        <div className="flex justify-center">
        {
          chapter.page_images !== undefined && currentPage > 0 ? 
          <img className="h-full object-contain" src={chapter.page_images[currentPage-1]}/>
          : 
          <div>whee</div>
        }

        </div>
      </div>
      }
      
    </div>
  );
}

export default ContentViewScreen;
