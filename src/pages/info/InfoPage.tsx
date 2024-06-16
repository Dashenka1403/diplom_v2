import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import './infoPageStyles.scss';
import {  CompetenceInfo, Discipline, DisciplineInfo, EducationProgram, LaborIntensity } from "../../types/models";
import { DisciplineList, GroupList, InfoTable, Information, TextField, Dialog } from "../../components";
import { TableTab } from "../../components/infoTable/infoTableProps";
import { Table } from "../../components/table";

const fakegroupData = 
[
   {id: 1, title: 'ИВТ', year: 2020, competences: [{id: 3, codeComp: 'ОПК -2', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
 {id: 5,  codeComp: 'ОПК-3', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
 {id: 6,  codeComp: 'ОПК-4', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
 {id: 7,  codeComp: 'ОПК-3', description: 'умение слушать и говорить с другими, правильно понимать информацию и передавать её, а также считывать невербальные сигналы'},
   ],
   disciplines: [{id: 1, title: 'Управление данными', status: 'Новая', 
   goal: 'Сформировать компетенции обучающегося в области закономерностей развития и функционирования психики и сознания человека, ознакомить с факторами, влияющими на его становление как личности, понимание себя как личности, проявления взаимоотношений с другими людьми',
   task: 'Объективную оценку состояния природных ресурсов. Оценка проводится по целому ряду параметров: количество, качество, степень загрязненности, влияние различных сфер человеческой деятельности на их воспроизводство и т.д.',
   info: [ {id: 3, codeComp:'ОПК-3', knowledge : 'row 1 cell 2', skill : 'Профессиональные компетенции — это набор знаний, умений и навыков, личных и деловых качеств, которые помогают эффективно решать задачи и развиваться в своей работе', ownership: 'Профессиональные компетенции — это набор знаний, умений и навыков, личных и деловых качеств, которые помогают эффективно решать задачи и развиваться в своей работе'},
   
   {id: 4, codeComp:'ОПК-2', knowledge : 'row 2 cell 2' },
   {id: 5, codeComp:'ОПК-2', knowledge : 'row 2 cell 2' },
   {id: 6, codeComp:'ОПК-2', knowledge : 'row 2 cell 2' }],
   laborIntensity: [
    {id: 3, id_sem: 2, info: 'Операционные системы - это программное обеспечение, которое управляет работой компьютера и обеспечивает взаимодействие между аппаратными устройствами и прикладными программами. Они являются основой для работы компьютера и обеспечивают управление ресурсами, такими как процессор, память, дисковые устройства и сетевое оборудование. Операционные системы обеспечивают удобный интерфейс для пользователя, позволяя ему запускать программы, управлять файлами и настройками системы. Благодаря операционным системам компьютер может работать эффективно и выполнять различные задачи, от простых операций до сложных вычислений. Они играют важную роль в функционировании современных компьютеров и мобильных устройств, обеспечивая им стабильную и безопасную работу.'},
],
   },
   {id: 16, title: 'Разработка пользовательских интерфейсов', status: 'Готова'}, {id: 3, title: 'Профессиональная этика', status: 'Утверждена'} ],
  
 },
   {id: 2, title: 'ИСТ', year: 2020,disciplines: [{id: 1, title: 'Проектная деятельность', status: 'Готова'},{id: 2, title: 'Разработка автоматизированных систем', status:'Новая'}] },
   {id: 3, title: 'ПО', year: 2020, disciplines: []},
   {id: 4, title: 'ВМ', year: 2020, disciplines: []},
   {id: 5, title: 'АП', year: 2020, disciplines: []},
   {id: 6, title: 'ИБ', year: 2020, disciplines: []},
   {id: 7, title: 'СИБ', year: 2020, disciplines: []},
   {id: 8, title: 'АБВ', year: 2020, disciplines: []},
   {id: 9, title: 'ГДЕ', year: 2020, disciplines: []},
   {id: 10, title: 'ЖЗИ', year: 2020, disciplines: []},
   {id: 11, title: 'КЛМ', year: 2020, disciplines: []},
   {id: 12, title: 'ПО', year: 2020, disciplines: []},
   {id: 13, title: 'ВМ', year: 2020, disciplines: []},
   {id: 14, title: 'АП', year: 2020, disciplines: []},
   {id: 15, title: 'ИБ', year: 2020, disciplines: []},

   
] as Array<EducationProgram> ;



 
export const InfoPage: FC =  () =>{

    const [groupData, setGroupData] = useState<Array<EducationProgram>>([]);
    const [disciplineData, setDisciplineData] = useState<Array<Discipline>>([]);
    const [tabData, setTabData] = useState<Array<DisciplineInfo>>([]);
    const [laborIntensity, setLaborIntensity] = useState<Array<LaborIntensity>>([]);
    const [competenceInfo, setCompetenceInfo] = useState<Array<CompetenceInfo>>([]);
    const [selectedGroupId, setSelectedGroupId] = useState<number>();
    const [selectedGroup, setSelectedGroup] = useState<EducationProgram>();
    const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>();
    const [selectedDisciplineId, setSelectedDisciplineId] = useState<number>();
    const [showDisciplineList, setShowDisciplineList] = useState(false);
    const [showTitle, setShowTitle] = useState(true);
    const [showTable, setShowTable] = useState(false);
    const [showTabRes, setShowTabRes] = useState(false);
    const [showTabInfo, setShowTabInfo] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [tabCompetence, setTabCompetence] = useState('');
    const [tabKnowledge, setTabKnowledge] = useState('');
    const [tabSkill, setTabSkill] = useState('');
    const [tabOwnership, setTabOwnership] = useState('');
    const [rowToEdit, setRecipeToEdit] = useState(0);
    const [userActionMode, setUserActionMode] = useState<'create' | 'edit'>('edit');

    
    const titleInfo = 'Выберите дисциплину для просмотра';

   
    useEffect(() => {
        setGroupData(fakegroupData);
            if(Array.isArray(fakegroupData) && fakegroupData.length) {
                 setSelectedGroupId(undefined);
            }
    }, []);

    useEffect(() => {
        const selectedGroup = groupData.find(g => g.id === selectedGroupId);
       // console.log(selectedGroup)
        const selectedDiscipline = disciplineData.find(d => d.id === selectedDisciplineId);
        setDisciplineData(selectedGroup ? selectedGroup.disciplines : []);
        setTabData(selectedDiscipline ? selectedDiscipline.info : []);
        setLaborIntensity(selectedDiscipline ? selectedDiscipline.laborIntensity : []);
        setCompetenceInfo(selectedGroup ? selectedGroup.competences : [])
        setSelectedDiscipline(undefined);
    //  console.log(laborIntensity)
        
    }, [groupData, selectedGroupId, selectedDisciplineId]);

    useEffect(() => {
        const selectedGroup = groupData.find(g => g.id === selectedGroupId);
       // console.log(selectedGroup)
        const selectedDiscipline = disciplineData.find(d => d.id === selectedDisciplineId);
        setDisciplineData(selectedGroup ? selectedGroup.disciplines : []);
        setTabData(selectedDiscipline ? selectedDiscipline.info : []);
        setLaborIntensity(selectedDiscipline ? selectedDiscipline.laborIntensity : []);
        setCompetenceInfo(selectedGroup ? selectedGroup.competences : []);
        setSelectedDiscipline(undefined);
       // console.log(selectedDiscipline)
        // 
        //console.log('hello');
    }, [groupData, selectedGroupId, selectedDisciplineId]);

    // useEffect(() => {

    //     if(userActionMode === 'edit'){
    //       const row = userActionMode === 'edit' 
    //     ? tabData.find(r => r.id === rowToEdit)
    //     : undefined;
    //       setTabCompetence(tabData[0]?.codeComp ??'');
    //       setTabKnowledge(tabData[0]?.knowledge ??'');
    //       setTabSkill(tabData[0]?.skill ??'');
    //       setTabOwnership(tabData[0]?.ownership ??'');
    //     }
       
    
    // },[groupData, tabData, userActionMode,rowToEdit])
    
      

    const groupSelectedHandler = (id: number) => {
        setSelectedGroupId(id);
        setShowDisciplineList(true);
        setSelectedDiscipline(undefined)
        if(selectedDiscipline == undefined )
        {setShowTitle(true);
        setShowTable(false)}
        const group = groupData.find(g => g.id === id);
        setSelectedGroup(group);
        //console.log(selectedDiscipline)
       // console.log(selectedGroup)
    }



    const disciplineSelectedHandler = (id?: number) => {
        // const _id: number | undefined = !id ? undefined : +id;
        setSelectedDisciplineId(id);
        setShowTitle(false);
        setShowTable(true);
        setShowTabRes(false);
        setShowTabInfo(false);

        
        const discipline =disciplineData.find(g => g.id === id);
        setSelectedDiscipline(discipline);
        // console.log(selectedDiscipline)
    }

    const tabSelectedHandler = (id:number) => {
        if(id == 1)
        {setShowTabRes(false);
        setShowTabInfo(true);}
        else if (id === 2)
            {
                {setShowTabRes(true);
                setShowTabInfo(false);}
            }
        
        else if (id === 3)
            {
                {setShowTabRes(false);
                setShowTabInfo(false);}
            }
        else
        {setShowTabRes(false);
        setShowTabInfo(false);}
    }

    const infoTableTab: TableTab = {
        id: 1,
        tabTitle: 'Информация'
    };

    const resultsTableTab: TableTab =  {
        id: 2,
        tabTitle: 'Результаты'
    };

    const laborIntensityTableTab: TableTab =  {
        id: 3,
        tabTitle: 'Трудоёмкость'
    };

    const clearDialogFields = () => {
        

    }

    
    // const editTableHandler = () => {
    //     clearDialogFields();
    //     setShowDialog(true);
        
    // }

    const tableDialogContentRenderer = () => {
       
         return (
                <>
                    
                    {/* {selectedDiscipline &&(<UploadIcon color='#7a7a7a' onClick={uploadFileHandler}/>)} */}
                    <TextField labelText="Название компетенции" value={tabCompetence } onChange={(val) => setTabCompetence(val)} />
                    <TextField labelText="Знать" value={tabKnowledge} onChange={(val) => setTabKnowledge(val)} />
                    <TextField labelText="Уметь" value={tabSkill} onChange={(val) => setTabSkill(val)} />
                    <TextField labelText="Владеть" value={tabOwnership} onChange={(val) =>setTabOwnership (val)} />

                     
                </>
            );
    
       
    }
    const closeDialogHandler = () =>{
        setShowDialog(false);
        clearDialogFields();
    }

    const saveDialogHandler = () => {
        if(!selectedDisciplineId) {
            closeDialogHandler();
            return;
        }
        
        closeDialogHandler();
    }

    const editTableHandler = (id: number) => {
        setSelectedDisciplineId(id);
        setShowDialog(true);
      
    }

   

    
    return(

        <Layout title="Генерация документации для преподавателей" >
             <Dialog title={ 'Редактировать строку таблицы'}
                open={showDialog} 
                onSave={saveDialogHandler}
                onCancel={closeDialogHandler}
            >
                {tableDialogContentRenderer()}
            </Dialog>
          <div className='info-page'>  
            <div className='info-page__group-info'>
                <h1 className='info-page__group-info__title'>Мои дисциплины</h1>
                <DisciplineList  open = {showDisciplineList} disciplineList={disciplineData} onItemClick={(id) => disciplineSelectedHandler(id)}/>
                <GroupList  groupList={fakegroupData}  onItemClick={(id) => groupSelectedHandler(id)} />   
            </div>
            <div className='info-page__main-info'>
            {showTitle&&(<div >{titleInfo}</div>)}
           {showTable&& (<InfoTable  tabs={[infoTableTab, resultsTableTab, laborIntensityTableTab]} onTabClick={(id) => tabSelectedHandler(id)} >

            {showTabRes&&(<Table onItemEdit={editTableHandler} className='info-page__table' items={tabData} compDescription={competenceInfo}  />)}
            {showTabInfo&&(<Information disciplines={disciplineData} />)}


            </InfoTable>
            )}
           
           </div>
        </div>
         </Layout>
    )
        
}