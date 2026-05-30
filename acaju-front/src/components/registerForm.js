import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Eye, EyeOff } from 'lucide-react'; // Ícones para a senha

// Estilo Global para garantir que a fonte e o fundo fiquem corretos
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif; // Fonte comum em design moderno
    background-color: #345c3b; // Verde de fundo exato
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

// Componentes Estilizados (Styled Components)

const FormCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #345c3b;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 30px;
`;

const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #3e4d5d;
  margin-bottom: 6px;
  font-weight: 500;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e6ed;
  border-radius: 8px;
  font-size: 16px;
  color: #2c3e50;
  transition: border-color 0.2s ease;

  &::placeholder {
    color: #b0bec5;
  }

  &:focus {
    outline: none;
    border-color: #345c3b;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #90a4ae;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: #3e4d5d;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #345c3b;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 10px;
  margin-bottom: 20px;

  &:hover {
    background-color: #2a492f;
  }
`;

const LoginLink = styled.a`
  display: inline-block;
  color: #90a4ae;
  font-size: 14px;
  text-decoration: none;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
    color: #3e4d5d;
  }
`;

// O Componente Principal

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    senha: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault(); // Evita que o formulário seja submetido acidentalmente
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário enviados:', formData);
    // Adicione sua lógica de envio de formulário aqui
  };

  return (
    <>
      <GlobalStyle />
      <FormCard>
        <Title>Criar Conta</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="nomeCompleto">Nome Completo</Label>
            <Input
              type="text"
              id="nomeCompleto"
              name="nomeCompleto"
              placeholder="Seu nome"
              value={formData.nomeCompleto}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="senha">Senha</Label>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleInputChange}
                required
                minLength={8} // Para validação básica
              />
              <PasswordToggle onClick={handleTogglePassword}>
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </PasswordToggle>
            </InputWrapper>
          </InputGroup>

          <SubmitButton type="submit">Solicitar Acesso</SubmitButton>
        </form>
        <LoginLink href="#login">Voltar ao Login</LoginLink>
      </FormCard>
    </>
  );
};

export default RegisterForm;