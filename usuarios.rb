require 'dm-core'
require 'dm-migrations'

class Usuario
  include DataMapper::Resource
  property :id, Serial
  property :username, String
  property :partidas_ganadas, Integer
  property :partidas_perdidas, Integer
  property :partidas_empatadas, Integer
end

DataMapper.finalize

get '/usuarios' do
  @usuarios = Usuario.all
  haml :usuarios
end
