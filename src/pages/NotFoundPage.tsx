import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import {useNavigate} from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 히스토리에서 뒤로 가기
  };
  return (
      <>
        <div className={'p-3 fixed top-0'}>
          <Button variant={'outline'} onClick={handleGoBack}>
            <ArrowLeft size={16}/>
          </Button>
        </div>
        <div className={'flex h-dvh justify-center items-center'}>
          Not found page
        </div>
      </>
  )
}

export {NotFoundPage};