import React from "react";
import VocabularyItem from "./VocabularyItem";

type Props = {};

const VocabularyPage = (props: Props) => {


    const arr =[
      {
        "id": 5,
        "created": 1613933292,
        "modified": 1617437150,
        "vocabulary": "app (application)",
        "translate": "ứng dụng",
        "spelling": "/æplɪ'keɪʃn/",
        "dictionaryEntry": "a software program which allows a user to perform specific tasks such as word processing, email, accounting, database management",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933291.59.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933291.59.mp3",
        "dictionaryEntryTranslate": "1 chương trình phần mềm cho phép người dùng thực hiện các công việc cụ thể như xử lý văn bản Word, email, kế toán, quản lý cơ sở dữ liệu",
        "exampleSentences": "Examples of popular applications include Microsoft Word, Adobe Photoshop, and Mozilla Firefox.",
        "exampleSentencesTranslate": "Ví dụ về các ứng dụng phổ biến bao gồm Microsoft Word, Adobe Photoshop và Mozilla Firefox.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933291.59.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933291.59.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 186,
        "isDeleted": false
      },
      {
        "id": 8,
        "created": 1613933293,
        "modified": 1613933293,
        "vocabulary": "component",
        "translate": "bộ phận",
        "spelling": "/kəm'pounənt/",
        "dictionaryEntry": "any device internal to the computer, such as a primary hard disk drive or motherboard",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933292.542.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933292.542.mp3",
        "dictionaryEntryTranslate": "1 thiết bị gắn bên trong PC, chẳng hạn như đĩa cứng chính (HDD) hay bo mạch chủ\n\n\n",
        "exampleSentences": "A hardware geek is constantly upgrading components in his computer to achieve more performance.",
        "exampleSentencesTranslate": "Một người đam mê phần cứng liên tục nâng cấp các thành phần trong máy tính của mình để đạt được hiệu suất cao hơn.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933292.542.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933292.542.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 184,
        "isDeleted": false
      },
      {
        "id": 12,
        "created": 1613933293,
        "modified": 1613933293,
        "vocabulary": "computer",
        "translate": "máy tính",
        "spelling": "/kəm'pju:tə/",
        "dictionaryEntry": "an electronic, digital device that stores and processes information",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933293.009.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933293.009.mp3",
        "dictionaryEntryTranslate": "1 thiết bị gắn bên trong PC, chẳng hạn như đĩa cứng chính (HDD) hay bo mạch chủ\n\n\n",
        "exampleSentences": "A computer needs to be replaced or upgraded regularly or it will become obsolete.",
        "exampleSentencesTranslate": "Một máy tính cần được thay thế hoặc nâng cấp thường xuyên nếu không nó sẽ trở nên lỗi thời.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933293.009.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933293.009.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 1,
        "isDeleted": false
      },
      {
        "id": 17,
        "created": 1613933293,
        "modified": 1617088697,
        "vocabulary": "data",
        "translate": "dữ liệu",
        "spelling": "/´deitə/",
        "dictionaryEntry": "literally meaning 'that which is given', this term refers to raw information of any kind",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933293.479.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933293.479.mp3",
        "dictionaryEntryTranslate": "Theo nghĩa đen - ‘ thứ được đưa ra‘, thuật ngữ dùng cho thông tin căn bản (thô) của bất kỳ thứ nào\r",
        "exampleSentences": "The network administrator was fired when he lost all the company data by accidentally formatting the wrong hard disk drive array.",
        "exampleSentencesTranslate": "Quản trị viên mạng đã bị sa thải khi anh ta làm mất tất cả dữ liệu của công ty do vô tình định dạng sai vùng ổ đĩa cứng.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933293.479.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933293.479.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 185,
        "isDeleted": false
      },
      {
        "id": 22,
        "created": 1613933294,
        "modified": 1613933294,
        "vocabulary": "database",
        "translate": "Cơ sở dữ liệu",
        "spelling": "/,deitə'beis/",
        "dictionaryEntry": "an organized, electronic collection of information optimized for fast access and typically consisting of rows, columns, indexes, and keys",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933293.952.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933293.952.mp3",
        "dictionaryEntryTranslate": "một tập hợp thông tin điện tử, có tổ chức, được tối ưu hóa để truy cập nhanh và thường bao gồm các hàng, cột, mục lục và từ khóa",
        "exampleSentences": "The international company stored their customer information in a central database in Brussels.",
        "exampleSentencesTranslate": "Công ty quốc tế đã lưu trữ thông tin khách hàng của họ trong cơ sở dữ liệu trung tâm ở Brussels.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933293.952.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933293.952.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 263,
        "isDeleted": false
      },
      {
        "id": 27,
        "created": 1613933294,
        "modified": 1613933294,
        "vocabulary": "hardware",
        "translate": "Phần cứng",
        "spelling": "/´ha:d¸wɛə/",
        "dictionaryEntry": "physical things that make up a computer, such as a component or a peripheral",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933294.422.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933294.422.mp3",
        "dictionaryEntryTranslate": "1 vật thể tạo nên PC, chẳng hạn như các bộ phận hay các thiết bị ngoại vi",
        "exampleSentences": "Hardware today has become such a commodity that it's often more expensive to repair it than to replace it.",
        "exampleSentencesTranslate": "Phần cứng ngày nay đã trở thành một thứ hàng hóa đến nỗi việc sửa chữa nó thường đắt hơn là thay thế nó",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933294.422.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933294.422.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 158,
        "isDeleted": false
      },
      {
        "id": 32,
        "created": 1613933295,
        "modified": 1613933295,
        "vocabulary": "Internet",
        "translate": "Internet",
        "spelling": "/'intə,net/",
        "dictionaryEntry": "the largest known public network in the world, connecting millions of computers around the world",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933294.907.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933294.908.mp3",
        "dictionaryEntryTranslate": "Mạng lưới cộng đồng lớn nhất trên thế giới, kết nối hàng triệu máy tính khắp nơi\r",
        "exampleSentences": "Some people refer to the Internet as an information superhighway.",
        "exampleSentencesTranslate": "Một số người coi Internet như một siêu xa lộ thông tin.",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933294.908.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933294.908.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 17,
        "isDeleted": false
      },
      {
        "id": 37,
        "created": 1613933295,
        "modified": 1613933295,
        "vocabulary": "network",
        "translate": "mạng lưới",
        "spelling": "/'netwə:k/",
        "dictionaryEntry": "a group of connected computers which share resources",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933295.375.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933295.375.mp3",
        "dictionaryEntryTranslate": "một nhóm máy tính được kết nối chia sẻ tài nguyên",
        "exampleSentences": "The company network consisted of 3 servers, 95 workstations, and 10 printers.",
        "exampleSentencesTranslate": "Mạng công ty bao gồm 3 máy chủ, 95 máy trạm và 10 máy in. ",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933295.375.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933295.375.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 383,
        "isDeleted": false
      },
      {
        "id": 42,
        "created": 1613933296,
        "modified": 1613933296,
        "vocabulary": "peripheral",
        "translate": "ngoại vi",
        "spelling": "/pə´rifərəl/",
        "dictionaryEntry": "an external computer add-on, such as a printer or a scanner; also known as an 'accessory'",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933295.847.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933295.847.mp3",
        "dictionaryEntryTranslate": "1 máy tính mở rộng (add-on), chẳng hạn như máy in hay máy scan, hay còn gọi là phụ kiện\r",
        "exampleSentences": "The woman hated the look of all the tangled wires behind her desk, which were caused by so many peripherals.",
        "exampleSentencesTranslate": "Người phụ nữ ghét nhìn thấy tất cả những sợi dây rối rắm đằng sau bàn làm việc của mình, do có quá nhiều thiết bị",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933295.847.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933295.847.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 159,
        "isDeleted": false
      },
      {
        "id": 47,
        "created": 1613933296,
        "modified": 1617088632,
        "vocabulary": "software",
        "translate": "phần mềm",
        "spelling": "/ˈsôf(t)wer/",
        "dictionaryEntry": "any program designed to run on a computer",
        "audioDictionaryUS": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_US_1613933296.313.mp3",
        "audioDictionaryUK": "https://eng.cybersoft.edu.vn/assets/media/dictionary_unit_1_UK_1613933296.313.mp3",
        "dictionaryEntryTranslate": "Là bất kỳ chương trình nào được thiết kế để chạy trên PC",
        "exampleSentences": "The geek purchased new software for his computer almost every weekend.",
        "exampleSentencesTranslate": "Hầu như cuối tuần nào anh ta cũng mua phần mềm mới cho máy tính của mình. ",
        "audioExampleSentencesUS": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_US_1613933296.313.mp3",
        "audioExampleSentencesUK": "https://eng.cybersoft.edu.vn/assets/media/example_sentences_unit_1_UK_1613933296.313.mp3",
        "author": -1,
        "orther": "",
        "unit": 1,
        "oldId": 160,
        "isDeleted": false
      }
    ]




  return (
    <div className="w-full">
      <div className="w-7/12 m-auto mt-10">
      {arr.map((item) => (
        <VocabularyItem  key={item.id} item={item}/>
      ))}
      </div>
    
    </div>
  );
};

export default VocabularyPage;
