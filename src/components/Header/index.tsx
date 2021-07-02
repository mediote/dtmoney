import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenTransanctionModal: () => void;
}

export function Header({ onOpenTransanctionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransanctionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
