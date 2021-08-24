import { ModelsWrapper, ModelSection} from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent';
import { Container } from './styles';

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
            modelName="Model One" 
            overlayNode={
              <DefaultOverlayContent
                label="Model On"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
