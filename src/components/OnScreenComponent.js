import { useRef } from 'react';
import { useOnScreen } from 'hooks/useOnScreen';

const OnScreenComponent = () => {
  const header2Ref = useRef();
  const visible = useOnScreen(header2Ref, '-100px');
  return (
    <>
      <h1>Header</h1>
      <p>
        Quis quis ex laborum quis officia irure tempor aute Lorem sunt ex.
        Incididunt elit ipsum ullamco nulla commodo velit ad. Nulla eu duis
        nostrud sint enim elit. Sint eiusmod quis labore consequat minim
        consequat et est ex aliqua irure ipsum fugiat. In ut consequat occaecat
        quis elit adipisicing excepteur sit. Minim sit anim laboris mollit
        proident irure cupidatat. Commodo consequat ullamco adipisicing commodo.
        Minim adipisicing tempor sit ipsum consequat duis nostrud dolor
        exercitation laborum quis nisi laboris. Excepteur incididunt consequat
        eiusmod labore. Ullamco nisi proident mollit voluptate proident
        incididunt magna culpa et id esse veniam. Consequat Lorem non ullamco do
        dolore tempor mollit. Eiusmod do anim consequat qui qui ea velit non id
        excepteur quis. Deserunt ex qui excepteur sit laborum sint nostrud sint
        duis non elit in ea excepteur. Reprehenderit ad ex ullamco mollit
        nostrud aliquip occaecat. Excepteur laboris ex ipsum voluptate. Commodo
        officia dolor ad voluptate qui cillum elit elit consectetur mollit
        nostrud et laboris. Amet proident culpa amet nulla est ea veniam ipsum
        est aute aliqua magna duis. Fugiat do eu occaecat qui. Id officia irure
        sunt in eiusmod esse esse ut eiusmod aliquip cupidatat. Dolore nostrud
        excepteur velit ut cupidatat nulla dolor commodo ut mollit laboris. Ut
        incididunt nisi aliqua et nisi nisi veniam deserunt eu. Tempor
        incididunt ullamco dolore eiusmod pariatur cillum culpa fugiat id.
        Excepteur pariatur sit tempor ea velit deserunt sint ex. Consectetur sit
        consequat excepteur irure magna. Qui ullamco consequat exercitation
        aliquip commodo ad. Eiusmod enim commodo ad sunt do ad. Eu exercitation
        amet elit minim consectetur magna consectetur qui est Lorem. Adipisicing
        eiusmod eiusmod excepteur commodo id esse non in irure reprehenderit. In
        non sunt non deserunt sunt.Amet proident culpa amet nulla est ea veniam
        ipsum est aute aliqua magna duis. Fugiat do eu occaecat qui. Id officia
        irure sunt in eiusmod esse esse ut eiusmod aliquip cupidatat. Dolore
        nostrud excepteur velit ut cupidatat nulla dolor commodo ut mollit
        laboris. Ut incididunt nisi aliqua et nisi nisi veniam deserunt eu.
        Tempor incididunt ullamco dolore eiusmod pariatur cillum culpa fugiat
        id. Excepteur pariatur sit tempor ea velit deserunt sint ex. Consectetur
        sit consequat excepteur irure magna. Qui ullamco consequat exercitation
        aliquip commodo ad. Eiusmod enim commodo ad sunt do ad. Eu exercitation
        amet elit minim consectetur magna consectetur qui est Lorem. Adipisicing
        eiusmod eiusmod excepteur commodo id esse non in irure reprehenderit. In
        non sunt non deserunt sunt.
      </p>
      <h1 ref={header2Ref}>Header 2 {visible && '(visible)'}</h1>
      <p>
        Officia voluptate dolore aliqua non tempor sit in qui cupidatat. Tempor
        ex commodo excepteur adipisicing dolor et in. Lorem aute veniam nisi
        excepteur cupidatat laborum dolor pariatur eu est. Ipsum aliqua dolore
        nisi duis quis ipsum mollit consectetur pariatur aliquip eiusmod
        occaecat consectetur. Quis mollit commodo velit cillum incididunt irure
        irure culpa sit culpa adipisicing. Dolore sunt non pariatur et
        adipisicing et magna sunt minim occaecat dolore deserunt. Ad deserunt
        adipisicing duis magna id culpa incididunt. Do laboris reprehenderit
        proident ipsum minim sint eiusmod officia occaecat magna deserunt est.
        Voluptate do consequat nisi duis ea aute commodo cupidatat. Non sit
        officia ad fugiat adipisicing occaecat cupidatat ullamco occaecat
        officia. Consequat esse do nisi aliquip. Proident incididunt non culpa
        consequat culpa veniam tempor laborum. Aliquip excepteur occaecat magna
        deserunt mollit laboris laboris in occaecat consectetur id cupidatat
        ipsum minim. Velit dolor excepteur veniam labore enim officia in fugiat
        sit veniam. Ut dolor fugiat in nisi ea adipisicing ex officia pariatur
        sunt sint laborum. Elit deserunt ad irure magna aute voluptate deserunt
        ex culpa deserunt sunt nisi ad minim. Pariatur dolor occaecat mollit
        ipsum deserunt. Nisi excepteur nostrud elit amet aliquip.
      </p>
    </>
  );
};

export default OnScreenComponent;
