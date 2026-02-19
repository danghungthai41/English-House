import { useState } from "react";
import {
  faFemale,
  faList,
  faListUl,
  faMale,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "@/Theme";
import { Button } from "@/Components";
import { actions, useStore } from "@/store";

type Props = {
  item: any;
};

const VocabularyItem = ({ item }: Props) => {
  const [isTranslate, setIsTranslate] = useState<boolean>(false);
  const [state, dispatch] = useStore();
  console.log(state);
  const addWordList = (item: any) => () => {
    dispatch(actions.addWordList(item));
  };
  const toggleTranslate = () => {
    setIsTranslate(!isTranslate);
  };

  return (
    <div className=" border-b-3 border-[#5D2FC1] w-full mb-9">
      <div>
        <div className="flex justify-between">
          <div className="flex space-x-5">
            <Button>
              <FontAwesomeIcon icon={faVolumeHigh} className="mr-2" />
              <FontAwesomeIcon icon={faMale} />
            </Button>

            <Button>
              <FontAwesomeIcon icon={faVolumeHigh} className="mr-2" />
              <FontAwesomeIcon icon={faFemale} />
            </Button>
          </div>
          <div className="w-12 h-6" onClick={toggleTranslate}>
            <img
              src={isTranslate ? img.flagEng : img.flagVie}
              alt=""
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div>
          <h1 className="text-3xl my-5">
            {item.vocabulary} - {item.spelling}
          </h1>
          {isTranslate && (
            <h1 className="text-3xl my-5 text-red-500">{item.translate}</h1>
          )}
        </div>
      </div>
      <p className="border-b-1 border-yellow-title relative my-5">
        <span className="w-12 h-6 bg-yellow-title absolute -top-3 -right-1 rounded-full flex justify-around px-1">
          <span
            className="font-medium text-xl leading-[20px]"
            onClick={addWordList(item)}
          >
            +
          </span>
          <span className="">
            <FontAwesomeIcon
              icon={faListUl}
              size="sm"
              className="leading-[20px] font-bold"
            />
          </span>
        </span>
      </p>{" "}
      <div className="flex flex-col space-y-7">
        <p>{item.dictionaryEntry}</p>
        {isTranslate && (
          <p className="text-red-500">{item.dictionaryEntryTranslate}</p>
        )}

        <div className="flex space-x-5">
          <Button>
            <FontAwesomeIcon icon={faVolumeHigh} className="mr-2" />
            <FontAwesomeIcon icon={faMale} />
          </Button>

          <Button>
            <FontAwesomeIcon icon={faVolumeHigh} className="mr-2" />
            <FontAwesomeIcon icon={faFemale} />
          </Button>
        </div>

        <p>{item.exampleSentences}</p>
        {isTranslate && (
          <p className="text-red-500">{item.exampleSentencesTranslate}</p>
        )}
      </div>
    </div>
  );
};

export default VocabularyItem;
